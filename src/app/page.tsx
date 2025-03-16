"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FuturisticHero from "@/app/components/FuturisticHero";
import "../styles/fonts.css";
import Footer from "@/app/components/Footer";
import Pricing from "@/app/components/Pricing";
import Header from "@/app/components/Header";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <FuturisticHero />
      <Pricing />
      <Footer />
    </main>
  );
}
