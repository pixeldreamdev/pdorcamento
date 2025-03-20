"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FuturisticHero from "@/app/components/FuturisticHero";
import "../styles/fonts.css";
import Pricing from "@/app/components/Pricing";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <FuturisticHero />
      <Pricing />
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          title="Return to top"
          className="

            /* Base styles */
            fixed bottom-8 right-8 p-4 z-50
            rounded-full

            /* Background */
            bg-gradient-to-r from-emerald-600 to-gray-900
            border-2 border-emerald-500

            /* Shadow effects */
            shadow-[0_0_15px_rgba(16,185,129,0.5)]
            /* Interactive states */
            hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]
            hover:border-emerald-400
            transition-all duration-300

            /* Pseudo-element glow effect */
            before:content-['']
            before:absolute before:inset-0
            before:rounded-full
            before:border-2 before:border-emerald-500
            before:bg-gradient-to-r 
            before:from-emerald-500 before:to-emerald-700
            before:opacity-0
            before:transition-opacity before:duration-300
            before:z-[-1]
            hover:before:opacity-20
            group
          "
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              h-6 w-6 
              text-emerald-400
              group-hover:text-emerald-300 
              transition-colors 
              relative z-10
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </main>
  );
}
