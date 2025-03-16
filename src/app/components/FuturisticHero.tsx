import React, { useState, useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";

const TypewriterGroup: React.FC<{
  texts: string[];
  delay?: number;
  pauseTime?: number;
}> = ({ texts, delay = 150, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentText = texts[currentTextIndex];

        if (!isDeleting) {
          if (index < currentText.length) {
            setDisplayText((prev) => prev + currentText[index]);
            setIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (index > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
            setIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? delay / 1.5 : delay
    );

    return () => clearTimeout(timer);
  }, [index, isDeleting, currentTextIndex, texts, delay, pauseTime]);

  return (
    <div className="min-h-[1.5em] text-center">
      <span className="inline-block">
        {displayText}
        <span className="animate-cursor opacity-75">|</span>
      </span>
    </div>
  );
};

export default function FuturisticHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/fundo.png')",
          filter: "brightness(0.5) contrast(1.2)",
        }}
      />

      {/* Animated particles */}
      <ParticlesBackground />

      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 animate-gradient z-2" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-4">
        <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 space-y-4">
          <TypewriterGroup
            texts={["Transforme sua presença no digital"]}
            delay={150}
            pauseTime={2000}
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in max-w-3xl mx-auto mb-8 mt-8">
          Soluções profissionais em Google Meu Negócio e Desenvolvimento Web
          para impulsionar seu negócio
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#plans"
            className="relative inline-flex items-center px-8 py-4 font-bold text-lg
                     text-emerald-300 bg-black/50 border border-emerald-500/50
                     hover:border-emerald-400 transition-all duration-300
                     rounded-md overflow-hidden group backdrop-blur-sm
                     hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]
                     hover:bg-emerald-950/30"
          >
            <span className="relative z-10 flex items-center">
              Ver Planos
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity">
              <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              <div className="absolute inset-y-0 w-px left-0 bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
              <div className="absolute inset-y-0 w-px right-0 bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
