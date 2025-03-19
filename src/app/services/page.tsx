"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Construction() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center" data-aos="fade-up">
        {/* Título com efeito de glitch */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 text-emerald-400
          animate-pulse relative
          after:content-['Em_Construção'] after:absolute after:left-0
          after:text-emerald-500 after:opacity-70 after:-z-10
          after:animate-[glitch_0.3s_infinite]"
        >
          Em Construção
        </h1>

        {/* Ícone animado */}
        <div className="my-8">
          <svg
            className="w-24 h-24 mx-auto text-emerald-500 animate-spin-slow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.204-.107-.397.165-.71.505-.78.929l-.15.894c-.09.542-.56.94-1.109.94h-1.094c-.55 0-1.02-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.774-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* Mensagem */}
        <p className="text-emerald-300 mb-8 text-lg">
          Estamos trabalhando para trazer algo incrível...
        </p>

        {/* Botão de retorno */}
        <Link
          href="/"
          className="inline-block px-6 py-3 
            bg-gradient-to-r from-emerald-600 to-gray-900
            text-emerald-300 rounded-lg
            border-2 border-emerald-500
            shadow-[0_0_15px_rgba(16,185,129,0.3)]
            hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]
            transition-all duration-500
            hover:scale-110
            hover:-rotate-1
            hover:border-emerald-400
            hover:text-emerald-200
            relative
            animate-pulse-subtle
            after:content-['']
            after:absolute
            after:inset-0
            after:bg-emerald-500/10
            after:rounded-lg
            after:animate-pulse"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
