/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'verde-nav': '#98cf6d',
        'verde-text': '#2A4518',
        'amarelo-text': '#F8F27C',
        'azul-bg': '#3E5C76',
        'amarelo-bg': '#F5D547',
        'vermelho-bg': '#D95F5F',
        'bege-bg': '#EDE6DB'
      }
    },
  },
  plugins: [],
  safelist: [{pattern: /^.*$/}]
}

