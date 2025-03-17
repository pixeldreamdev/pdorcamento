import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-arcade text-xs">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs mb-1">
          &copy; {new Date().getFullYear()} Pixel Dream. Todos os direitos
          reservados.
        </p>
        <div className="flex justify-center space-x-4 items-center text-xs">
          <a
            href="/contato"
            className="text-gray-400 hover:text-green-400 py-2"
          >
            Contato
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="/politica-de-privacidade"
            className="text-gray-400 hover:text-green-400 py-2"
          >
            Política de Privacidade
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="/termos-de-servico"
            className="text-gray-400 hover:text-green-400 py-2"
          >
            Termos de Serviço
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
