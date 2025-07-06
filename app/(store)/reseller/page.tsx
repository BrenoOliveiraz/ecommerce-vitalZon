
'use client'

import {
  Input
} from "@/components/ui/input"
import {
  Textarea
} from "@/components/ui/textarea"
import {
  Button
} from "@/components/ui/button"
import {
  useState
} from "react"

export default function RevendedorPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })

    if (response.ok) {
      setSuccess(true)
      form.reset()
    } else {
      alert("Erro ao enviar o formulário. Tente novamente.")
    }

    setLoading(false)
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Seja um Revendedor</h1>

      {success && (
        <p className="text-green-600 mb-4 text-center">
          Cadastro enviado com sucesso! Em breve entraremos em contato.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="nome" placeholder="Seu nome completo" required />
        <Input type="email" name="email" placeholder="Seu e-mail" required />
        <Input name="telefone" placeholder="Telefone com DDD" required />
        <Input name="cidade" placeholder="Cidade" />
        <Input name="estado" placeholder="Estado" />
        <Textarea name="mensagem" placeholder="Fale um pouco sobre você ou deixe uma dúvida" rows={4} />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Cadastro"}
        </Button>
      </form>
    </main>
  )
}
