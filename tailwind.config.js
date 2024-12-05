/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blinkCursor: {
          '50%': { borderRightColor: 'transparent' },
        },
        typeAndDelete: {
          '0%, 10%': { width: '0' },
          '45%, 55%': { width: '6.2em' }, // adjust width based on content
          '90%, 100%': { width: '0' },
        },
      },
      animation: {
        blinkCursor: 'blinkCursor 0.5s step-end infinite alternate',
        typeAndDelete: 'typeAndDelete 4s steps(11) infinite, blinkCursor 0.5s step-end infinite alternate',
      },
    },
  },
  variants: {},
  plugins: [],
};
