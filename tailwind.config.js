/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // if you're using Vite
    "./src/**/*.{js,ts,jsx,tsx}", // your React components
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      backgroundImage: {
        'skills-gradient':
          'linear-gradient(38.73deg, rgba(204,0,187,0.15), rgba(201,32,184,0), 50%), linear-gradient(141.27deg, rgba(0,70,209,0), 50%, rgba(0,70,209,0.15) 100% )',
      },
    },
  },
  plugins: [
    // Custom plugin for clip-path utilities
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-triangle': {
          'clip-path': 'polygon(50% 0%, 0% 100%, 100% 100%)',
        },
        '.clip-circle': {
          'clip-path': 'circle(50% at 50% 50%)',
        },
        '.clip-path-custom': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)',
        },
        '.clip-path-custom-2': {
          'clip-path':
            'polygon(0 0, 100% 0, 100% 98%, 25% 95%, 0 100%)',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};
