// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0A1F3F',   // Primary background, headers, nav, footer
        electric: '#1E90FF',   // CTAs, buttons, hover states
        teal: '#2EC4B6',       // Accent elements, icons, dividers
        softGray: '#F0F0F0',   // Background sections, cards
        steelGold: '#C8A951',  // Luxury accent, logo highlights[cite: 1]
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'], // Headlines, nav, buttons[cite: 1]
        secondary: ['Poppins', 'sans-serif'],  // Body text, descriptions[cite: 1]
      },
      lineHeight: {
        'editorial': '1.7', // Generous line spacing for body text (1.6-1.8)[cite: 1]
      }
    },
  },
  plugins: [],
}