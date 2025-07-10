// filepath: /Users/teresitacanete/Documents/neko-ramen/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#facc15",
          500: "#eab308",
        },
        background: "#ffffff",
        foreground: "#000000",
      },
    },
  },
  // ⛔️ esto es lo que bloquea oklch
  corePlugins: {
    preflight: true,
  },
};
