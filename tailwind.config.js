/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(249,211,211,1) 21%, rgba(234,251,252,1) 46%, rgba(255,255,255,1) 100%, rgba(99,229,255,1) 100%)',
      },
    },
  },
  plugins: [],
};
