/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Home/.{js,jsx,ts,tsx,html}", // change this if your files are in a different path
  ],
  theme: {
    extend: {
      animation: {
        float: "float 4s ease-in-out infinite",
        fade: "fade 0.7s ease-in-out",
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
