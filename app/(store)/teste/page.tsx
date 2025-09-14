'use client'

import { useState } from 'react'

export default function Teste() {
  const [formdata, setFormdata] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const handleChange = (field: string, value: string) => {
    setFormdata((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form enviado:', formdata)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-full flex flex-col items-center justify-self-start mt-10"
    >
      <h2 className="text-center font-bold text-2xl mb-4">TESTE FORMULARIO</h2>

      <div className="flex flex-col gap-4 max-w-md w-full border p-6 rounded-md shadow-md">
        <label className="text-black" htmlFor="nome">
          Nome
        </label>
        <input
          id="nome"
          className="border min-w-[50px] max-w-sm p-2 rounded-md"
          placeholder="Digite seu nome"
          type="text"
          value={formdata.nome}
          onChange={(e) => handleChange('nome', e.target.value)}
        />
        <label className="text-black" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="border min-w-[50px] max-w-sm p-2 rounded-md"
          placeholder="Digite seu email"
          type="email"
          value={formdata.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <label className="text-black" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          className="border min-w-[50px] max-w-sm p-2 rounded-md"
          placeholder="Digite sua senha"
          type="password"
          value={formdata.senha}
          onChange={(e) => handleChange('senha', e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Salvar
      </button>
    </form>
  )
}


{itens.map(item = >)}