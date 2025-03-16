import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 font-arcade text-sm">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Pixel Dream. Todos os direitos
          reservados.
        </p>
        <div className="mt-2">
          <a href="/contato" className="text-gray-400 hover:text-green-400">
            Contato
          </a>
          <span className="mx-2">|</span>
          <a
            href="/politica-de-privacidade"
            className="text-gray-400 hover:text-green-400"
          >
            Política de Privacidade
          </a>
          <span className="mx-2">|</span>
          <a
            href="/termos-de-servico"
            className="text-gray-400 hover:text-green-400"
          >
            Termos de Serviço
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
