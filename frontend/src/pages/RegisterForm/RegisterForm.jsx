import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import LoadingToast from '../../components/LoadingToast/LoadingToast';
import User from '../../services/User';
import { typeErrors } from '../../utils/typeErrors';
import backgroundRegister from './img/background.png'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: ''
  });

  const infosPassword = User.validatePassword(formData.senha);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    if (name === 'senha') {
      User.validatePassword(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validateFields = User.validate(formData);
    
    if (validateFields.isValid) {
      const toastId = toast.info(<LoadingToast />, {
        autoClose: false
      });

      await User.submitFormData(formData)
        .then((data) => {
          const { erro } = data
          if (!erro) {
            toast.dismiss(toastId);
            toast.success('Registrado com sucesso!');
          }
        })
        .catch((error) => {
          const { tipoErro } = error;
          toast.dismiss(toastId);
          toast.error(typeErrors[tipoErro]);
        });

      return
    }

    validateFields.errors.forEach(error => {
      toast.error(error);
    });
  }

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
                <p className={infosPassword.length ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
                  Mínimo de 8 caracteres
                </p>
                <p className={infosPassword.lowercase ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
                  Pelo menos uma letra minúscula
                </p>
                <p className={infosPassword.uppercase ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
                  Pelo menos uma letra maiúscula
                </p>
                <p className={infosPassword.number ? 'text-green-500 text-xs' : 'text-red-500 text-xs'}>
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
              className='bg-gradient-to-tr mt-1 from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] rounded-full text-white font-bold h-10'>
                Registrar
            </button>
            <a className='text-xs text-center underline cursor-pointer'>Já possuo uma conta</a>
          </form>
        </section>
        <img 
          className='w-0 bg-cover lg:w-7/12 rounded-r-2xl'
          src={backgroundRegister}
        />
      </section>
    </>
  )
}