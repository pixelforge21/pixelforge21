/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}", // Scan all JSX/JS files inside src
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
