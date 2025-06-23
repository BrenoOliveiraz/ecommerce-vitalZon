'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { Search, Heart, ShoppingCart, User, HelpCircle } from 'lucide-react'
// import { useBasketStore } from '@/app/(store)/store'

export default function Header() {
  const { user } = useUser()

  // const itemCount = useBasketStore((state) =>
  //   state.items.reduce((total, item) => total + item.quantity, 0)
  // )

  return (
    <header className="relative bg-white py-4 px-4 min-h-[80px] w-full shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">

        {/* Logo + Nome */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-Photoroom.png"
            alt="Logo"
            width={70}
            height={60}
            className="object-contain"
          />
          <span className="text-[#4FC3CF] font-bold text-xl">VitalZon</span>
        </Link>

        {/* Barra de busca */}
        <form action="/search" className="flex flex-1 max-w-xl bg-[#F6F6F6] rounded px-3 py-2 items-center shadow-sm">
          <input
            type="text"
            name="query"
            placeholder="Olá, o que está procurando hoje?"
            className="flex-1 outline-none text-sm text-[#333333] placeholder:text-gray-500 bg-transparent"
          />
          <Search className="w-5 h-8 text-gray-500" />
        </form>

        {/* Ações à direita */}
        <div className="flex items-center gap-6 text-sm font-medium text-[#333333] whitespace-nowrap">

          {/* Atendimento */}
          <Link href="/help" className="flex items-center gap-1 hover:opacity-75 transition">
            <HelpCircle className="w-5 h-5 text-[#4FC3CF]" />
            <span>Atendimento</span>
          </Link>

          {/* Favoritos */}
          <Link href="/favorites" className="flex items-center gap-1 hover:opacity-75 transition">
            <Heart className="w-5 h-5 text-[#4FC3CF]" />
            <span>Favoritos</span>
          </Link>

          {/* Minha conta */}
          <Link href="/account" className="flex items-center gap-1 hover:opacity-75 transition">
            <User className="w-5 h-5 text-[#4FC3CF]" />
            <span>Minha conta</span>
          </Link>

          {/* Carrinho */}
          <Link href="/basket" className="relative flex items-center gap-1 hover:opacity-75 transition">
            <ShoppingCart className="w-5 h-5 text-[#4FC3CF]" />
            <div className="text-xs font-bold bg-[#4FC3CF] text-white rounded-full w-5 h-5 flex items-center justify-center">
              {/* {itemCount ?? 0} */}0
            </div>
          </Link>

        </div>
      </div>

      {/* Borda inferior com gradiente */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#FFF9C4] via-[#4FC3CF] to-[#A1E5CF]


" />
    </header>
  )
}
