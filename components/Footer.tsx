'use client';

import React from 'react';
import { Instagram, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { whatsappLink } from '@/lib/whatsLink';

export default function Footer() {
  return (
    <footer className="bg-[#F6F6F6] text-[#333333] py-16 mt-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">

        {/* Título motivacional */}
        <h2 className="text-2xl font-semibold text-[#4FC3CF]">
          Cuidar de você é o nosso propósito.
        </h2>

        {/* Subtítulo */}
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Acreditamos em uma saúde humana holística — corpo, mente e alma em equilíbrio.
          Escolha viver com mais energia, bem-estar e motivação todos os dias.
        </p>


        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#FFF9C4] via-[#4FC3CF] to-[#A1E5CF] rounded-full" />

        <div className="flex justify-center gap-6 mt-6">
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#4FC3CF] hover:underline"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </Link>

          <Link
            href={whatsappLink}
            target="_blank"
            className="flex items-center gap-2 text-[#4FC3CF] hover:underline"
          >
            <HelpCircle className="w-5 h-5" />
            Atendimento
          </Link>
        </div>


        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} VitalZon. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
