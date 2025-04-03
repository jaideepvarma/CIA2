/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        progress: 'progress 1s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateY(100%)' },
        },
        progress: {
          '0%': { strokeDasharray: '0, 100' },
        },
      },
    },
  },
  plugins: [],
};