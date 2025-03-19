import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faDiscord,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2326] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="text-2xl font-bold relative group w-full flex justify-center mb-7">
            <img
              src="/images/PIXELDREAMNOTION.png"
              alt="Pixel Dream Logo"
              width={350}
              height={300}
              className="object-contain relative z-10 transition-all duration-300
                       group-hover:scale-105 group-hover:brightness-125
                       [filter:drop-shadow(0_0_8px_rgba(52,211,153,0.3))]
                       group-hover:[filter:drop-shadow(0_0_12px_rgba(52,211,153,0.5))]"
            />
          </div>
          <div className="text-center text-xs text-gray-400 pb-5">
            &copy; {new Date().getFullYear()} Pixel Dream. Todos os direitos
            reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="/politica-de-privacidade"
              className="hover:text-green-400 transition-colors"
            >
              POLÍTICA DE PRIVACIDADE
            </a>
            <a
              href="/termos-de-servico"
              className="hover:text-green-400 transition-colors"
            >
              TERMOS DE SERVIÇO
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-green-400">
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
