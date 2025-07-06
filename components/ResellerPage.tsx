
'use client'

import { useState } from 'react'

export default function RevendedorPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    estado: '',
    mensagem: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dados enviados:', formData)

    alert('Cadastro enviado com sucesso!')
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Cadastro de Revendedor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome completo"
          value={formData.nome}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-3"
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone com DDD"
          value={formData.telefone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-3"
          required
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-3"
        />
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-3"
        />
        <textarea
          name="mensagem"
          placeholder="Fale um pouco sobre você ou deixe uma dúvida"
          rows={4}
          value={formData.mensagem}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-3"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-all"
        >
          ENVIAR CADASTRO
        </button>
      </form>
    </main>
  )
}
