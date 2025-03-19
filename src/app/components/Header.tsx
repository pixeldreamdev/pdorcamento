"use client";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-40">
      {/* Header Principal */}
      <div className="relative flex justify-between items-center p-1 bg-gray-800/80 backdrop-blur-sm">
        {/* Logo com efeito cyberpunk */}
        <div className="text-2xl font-bold relative group">
          <a href="/" className="font-arcade block relative">
            <img
              src="/images/PIXELDREAMNOTION.png"
              alt="Pixel Dream Logo"
              width={400}
              height={500}
              className="object-contain relative z-10 transition-all duration-300
                       group-hover:scale-105 group-hover:brightness-125
                       [filter:drop-shadow(0_0_8px_rgba(52,211,153,0.3))]
                       group-hover:[filter:drop-shadow(0_0_12px_rgba(52,211,153,0.5))]"
            />
            {/* Efeito de borda neon */}
            <div
              className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-cyan-500/0 
                          opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 
                          group-hover:animate-pulse"
            ></div>
          </a>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/services"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                Preços
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Botão Menu Mobile */}
      <button
        className="md:hidden fixed right-4 top-4 z-[100] p-2 text-white hover:text-emerald-400 transition-all duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          filter: isMenuOpen ? "drop-shadow(0 0 8px rgba(0,0,0,0.5))" : "none",
        }}
      >
        {!isMenuOpen ? (
          <div className="space-y-1.5">
            <div className="w-6 h-0.5 bg-current"></div>
            <div className="w-6 h-0.5 bg-current"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </div>
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 z-[90] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop com blur */}
        <div className="absolute inset-0 bg-gray-800/90 backdrop-blur-lg" />

        {/* Conteúdo do menu */}
        <nav className="relative z-[91] flex items-center justify-center h-full">
          <ul className="flex flex-col space-y-8 text-center">
            {["Serviços", "Preços", "Contato"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl text-white hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
