/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem', // Adds side padding to your container for better spacing
    },
    extend: {
      colors: {
        primary: '#e40046', // Snapdeal-style red
        secondary: '#f7f7f7',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        header: '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

