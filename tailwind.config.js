/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit'],
      },
      backgroundImage: {
        'herobg': "url('./src/assets/herobg.png')",
      }
    },
  },
  plugins: [],
}

