/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // active le mode sombre via classe
  theme: {
    extend: {
      colors: {
        vipCyan: '#22d3ee',   // couleur premium pour accents
        vipGray: '#1f2937',   // gris sombre élégant
        vipLightGray: '#f3f4f6', // gris clair pour mode light
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
      },
      boxShadow: {
        vip: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        vipCyan: '0 15px 25px -5px rgba(34, 211, 238, 0.4)',
      },
      borderRadius: {
        'vip-xl': '1.5rem',
        'vip-full': '9999px',
      },
    },
  },
  plugins: [],
}
