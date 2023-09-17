/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: "#110c03",
        background: "#fcf9f2",
        primary: "#eab217",
        secondary: "#f3dcba",
        accent: "#773f14",
      },
      fontFamily: {
        header: ['"Lora"', '"serif"'],
        text: ['"Inclusive Sans"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
