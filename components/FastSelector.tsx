"use client"

import { ArrowRight } from "lucide-react"

interface Category {
  label: string
  href: string
}

const categories: Category[] = [
  { label: "Todos os produtos", href: "/allProducts" }, 
  { label: "Pele e unha", href: "/categories/peleeunha" },
  { label: "Redutor de medidas", href: "/categories/redutordemedidas" },
  { label: "Naturais", href: "/categories/recuperacao" },
  { label: "Linha completa", href: "/categories/linhacompleta" },
  { label: "Revenda", href: "/categories/revenda" },
]

export default function FastSelector() {
  return (
    <div className="text-center mt-16 mb-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        O que você busca hoje?
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat, index) => (
          <a
            key={cat.label}
            href={cat.href}
            className="flex items-center gap-2 px-5 py-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition"
          >
            {cat.label}
            {index === 0 && <ArrowRight className="w-4 h-4" />} 
          </a>
        ))}
      </div>
    </div>
  )
}
