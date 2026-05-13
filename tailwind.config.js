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
        
        midnight: '#191970',       
        midnightLight: '#191970',  
        acadia: '#4e3612',
        
        electric: '#0066FF',       
        electricGlow: '#4D94FF',   
        cyan: '#00E5FF',           
        teal: '#00F0B5',          
        steelGold: '#D4AF37',      
        softGray: '#F0F0F0',       
      },
      backgroundImage: {
        
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'electric-gradient': 'linear-gradient(135deg, #0066FF 0%, #00E5FF 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 100%)',
      },
      fontFamily: {
        primary: ['"Playfair Display"', 'serif'],
        secondary: ['"Inter"', 'sans-serif'],
      },
      lineHeight: {
        'editorial': '1.7', // Generous line spacing for body text
      }
    },
  },
  plugins: [],
}