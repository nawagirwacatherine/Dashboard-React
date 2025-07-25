


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('ecommerc.jpg')",
        darkMode: "class",
      },
    },
  },
  plugins: [],
}