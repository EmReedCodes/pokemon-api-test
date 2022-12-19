/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { karla: ["Karla", "sans-serif"] },
      dropShadow: {
        text: "4px 4px 4px rgba(33, 33, 33, 0.1)",
      },
    },
  },
  plugins: [],
};
