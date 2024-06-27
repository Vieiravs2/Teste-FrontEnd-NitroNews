import React, { useState } from 'react';
import Joi from 'joi';
import axiosInstance from '../../services/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import LoadingToast from '../../components/LoadingToast/LoadingToast';

const typeErrors = {
  USUARIO_EXISTENTE: 'Esse email já está registrado',
  CAMPO_INVALIDO: 'Campo inválido'
}

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: ''
  });

  const [_errors, setErrors] = useState({});
  
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    if (name === 'senha') {
      validatePassword(value);
    }
  };

  function validatePassword(value) {
    setPasswordRequirements({
      length: value.length >= 8,
      lowercase: /[a-z]/.test(value),
      uppercase: /[A-Z]/.test(value),
      number: /[0-9]/.test(value)
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validateFields = validate();
    if (validateFields) {
      const toastId = toast.info(<LoadingToast />, {
        autoClose: false
      });

      axiosInstance.post('/', formData)
        .then(response => {
          const { erro } = response.data;
          if (!erro) {
            toast.dismiss(toastId);
            toast.success('Registrado com sucesso!');
          }
        })
        .catch(error => {
          const { tipoErro } = error.response.data;
          toast.dismiss(toastId);
          toast.error(typeErrors[tipoErro]);
        });
    }
  }

  const schema = Joi.object({
    nome: Joi.string().trim().required().messages({
      'string.empty': 'Nome é obrigatório'
    }),
    email: Joi.string().trim().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'Email é obrigatório',
      'string.email': 'Email inválido'
    }),
    senha: Joi.string().required().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$')).messages({
      'string.empty': 'Senha é obrigatória',
      'string.min': 'A senha deve ter no mínimo 8 caracteres',
      'string.pattern.base': 'A senha deve conter pelo menos um caractere minúsculo, um caractere maiúsculo e um numeral'
    }),
    confirmacaoSenha: Joi.any().valid(Joi.ref('senha')).required().messages({
      'any.only': 'A confirmação de senha deve ser idêntica à senha',
      'any.required': 'Confirmação de senha é obrigatória'
    })
  });

  function validate() {
    const { error } = schema.validate(formData, { abortEarly: false });
    
    if (!error) {
      setErrors({});
      return true;
    }

    const newErrors = {};

    error.details.forEach((detail) => {
      newErrors[detail.path[0]] = detail.message;
      toast.error(detail.message)
    });

    setErrors(newErrors);
    return false;
  };

  return (
    <>
      <ToastContainer />
      <section className='w-5/6 md:w-1/2 lg:w-7/12 h-[600px] bg-zinc-950 rounded-2xl flex'>
        <section id='form_container' className='flex flex-col px-10 pb-10 text-white basis-full md:basis-8/12 lg:basis-5/12'>
          <h1 className='my-5 font-sans text-lg font-bold text-center text-white md:text-3xl'>
            Registre-se
            <span className='ml-2 inline-block w-3 h-3 bg-gradient-to-tr from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] rounded-full'></span>
          </h1>
          <form id='main_form' className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <Label className='h-16 group'>
              Nome
              <Input 
                type='text' 
                name='nome'
                value={formData.nome}
                onChange={handleChange}
                className='w-full p-2 rounded-lg outline-none appearance-none h-9 bg-zinc-800 md:text-lg lg:text-xl'
              />
            </Label>
            <Label>
              Email
              <Input 
                type='text' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-2 rounded-lg outline-none appearance-none h-9 bg-zinc-800 md:text-lg lg:text-xl'
              />
            </Label>
            <Label>
              Senha
              <Input 
                type='password' 
                name='senha'
                value={formData.senha}
                onChange={handleChange}
                className='w-full p-2 rounded-lg outline-none appearance-none h-9 bg-zinc-800'
              />
              <div className='mt-4 text-sm password-requirements'>
                <p className={passwordRequirements.length ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
                  Mínimo de 8 caracteres
                </p>
                <p className={passwordRequirements.lowercase ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
                  Pelo menos uma letra minúscula
                </p>
                <p className={passwordRequirements.uppercase ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
                  Pelo menos uma letra maiúscula
                </p>
                <p className={passwordRequirements.number ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
                  Pelo menos um número
                </p>
              </div>
            </Label>
            <Label>
              Confirmação de Senha
              <Input type='password' 
                name='confirmacaoSenha'
                value={formData.confirmacaoSenha}
                onChange={handleChange}
                className='w-full p-2 rounded-lg outline-none appearance-none h-9 bg-zinc-800'
              />
            </Label>
            <button 
              type='submit'
              className='bg-gradient-to-tr mt-1 from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] rounded-full text-white font-bold h-10 rounded-lg'>
                Registrar
            </button>
            <a className='text-xs text-center underline cursor-pointer'>Já possuo uma conta</a>
          </form>
        </section>
        <section 
          id='backgroundpicture'
          className='w-0 bg-cover lg:w-7/12 rounded-r-2xl'>
        </section>
      </section>
    </>
  )
}