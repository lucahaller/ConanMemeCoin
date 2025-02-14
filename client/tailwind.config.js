/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegura que Tailwind escanee estos archivos
    "./public/index.html", // Opcional si usas clases en el HTML
    "./node_modules/tw-elements/dist/js/**/*.js", // Necesario para TW Elements
  ],
  theme: {
    extend: {
      colors: {
        neonYellow: "#FFD700",
        neonPink: "#FF1493",
        neonPurple: "#8A2BE2",
        marroncito: "#3d332a",
        marronclaro: "#e4d8c2",
        marronhover: "#685e53",
        violetita: "#cb6ce6",
      },
      fontFamily: {
        lucky: ["Luckiest Guy", "serif"],
      },
    },
  },
  plugins: [],
};
