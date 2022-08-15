/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        gortesk: ["Space Grotesk", "sans-serif"],
      },

      backgroundImage: {
        header: "url('./src/assets/headerBgImage.jpg')",
        attGradient:
          "linear-gradient(253.23deg, #08020A 29.24%, #0C0517 64.82%, #0C0517 84.7%, #0B0413 100%)",
        btnGradient:
          "linear-gradient(85.76deg, rgba(191, 196, 238, 0.0945738) -105.02%, #C367E6 10.94%, rgba(190, 206, 239, 0) 121.57%)",
      },
    },
  },
  plugins: [],
};
