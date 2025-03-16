/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        valorant: ["var(--font-valorant)", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        arcade: ["var(--font-arcade)"],
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        title: "title 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "card-appear": "cardAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        float: "float 6s ease-in-out infinite",
        cursor: "cursor 1s infinite",
        "glitch-1":
          "glitch-1 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both",
        "glitch-2":
          "glitch-2 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both",
        "border-flow": "border-flow 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        cursor: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "glitch-1": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "glitch-2": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(2px, -2px)" },
          "40%": { transform: "translate(2px, 2px)" },
          "60%": { transform: "translate(-2px, -2px)" },
          "80%": { transform: "translate(-2px, 2px)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
