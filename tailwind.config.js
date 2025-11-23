/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        earth: {
          50: '#faf8f5',
          100: '#f5f1e8',
          200: '#e8ddd0',
          300: '#d4c4b0',
          400: '#b8a082',
          500: '#9d8566',
          600: '#7a6a52',
          700: '#5d4f3f',
          800: '#4a3f33',
          900: '#3d3429',
        },
        deepBlue: {
          50: '#e6f1ff',
          100: '#b3d9ff',
          200: '#80c1ff',
          300: '#4da9ff',
          400: '#1a91ff',
          500: '#0077e6',
          600: '#005cb3',
          700: '#004180',
          800: '#00264d',
          900: '#000b1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

