import React, { useState } from "react";
import './index.css'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
  };

  return (
    <section className="w-1/2 h-[600px] bg-zinc-950 rounded-2xl flex">
      <section id="form_container" className="flex flex-col px-10 pb-10 text-white basis-5/12">
        <h1 className='my-12 font-sans text-3xl font-bold text-white'>
          Registre-se
          <span className="ml-2 inline-block w-3 h-3 bg-gradient-to-tr from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] rounded-full"></span>
        </h1>
        <form action="" id="main_form" className="flex flex-col gap-6">
          <label className="h-16 group">
            Nome
            <div id="gradiant_div" className="bg-none focus-within:bg-gradient-to-tr rounded-lg from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] p-[1px]">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-lg outline-none appearance-none h-9 bg-zinc-800"
              />
            </div>
          </label>
          <label>
            Email
            <div id="gradiant_div" className="bg-none focus-within:bg-gradient-to-tr rounded-lg from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] p-[1px]">
              <input 
                type="text" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-lg outline-none appearance-none h-9 bg-zinc-800"
              />
            </div>
          </label>
          <label>
            Senha
            <div id="gradiant_div" className="bg-none focus-within:bg-gradient-to-tr rounded-lg from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] p-[1px]">
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded-lg outline-none appearance-none h-9 bg-zinc-800"
              />
            </div>
          </label>
          <label>
            Confirmação de Senha
            <div id="gradiant_div" className="bg-none focus-within:bg-gradient-to-tr rounded-lg from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] p-[1px]">
              <input 
                type="password" 
                name="confirmedPassword"
                value={formData.confirmedPassword}
                onChange={handleChange}
                className="w-full p-2 rounded-lg outline-none appearance-none h-9 bg-zinc-800"
              />
            </div>
          </label>
          <button 
            type="submit"
            className="bg-gradient-to-tr mt-1 from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] rounded-full text-white font-bold h-10 rounded-lg">
              Registrar
            </button>
          <a className="text-sm text-center underline cursor-pointer">Já possuo uma conta</a>
        </form>
      </section>
      <section 
        id="backgroundpicture"
        className="w-7/12 bg-cover rounded-r-2xl">
      </section>
    </section>
  )
}