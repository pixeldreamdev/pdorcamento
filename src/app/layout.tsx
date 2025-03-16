import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import "../styles/fonts.css";

const valorant = localFont({
  src: "/fonts/Valorant.Font.ttf",
  variable: "--font-valorant",
  display: "swap",
});

const arcadeFont = localFont({
  src: "/fonts/arcade.ttf", // Ajustando para lowercase e extensão simplificada
  variable: "--font-arcade",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${valorant.variable} ${arcadeFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
