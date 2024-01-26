/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        pokemon: "'Pokemon Solid', sans-serif",
        inconsolata: "'Inconsolata', sans-serif",
      },
      fontSize: {
        "pokemon-small": "4rem",
        "pokemon-normal": "6rem",
        "pokemon-big": "8rem",
      },
    },
  },
  plugins: [],
};
