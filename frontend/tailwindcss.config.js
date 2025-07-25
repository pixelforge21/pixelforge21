// tailwind.config.js
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all React components
    "./public/index.html"         // Optional but good for purging unused styles
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e40046',   // Snapdeal's red (you can change for your brand)
        secondary: '#f5f5f5',
        accent: '#202124',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}

