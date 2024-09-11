/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true //Her container sınıfı oluşturulduğunda sınıfı ortala.
  },
    extend: {
      fontFamily: { //dışarıdan eklenen font familyler
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open:['Open Sans', 'sans-serif'],
      },
      colors:{  //dışarıdan eklenen font renkler
          'emir-red': '#8C1A45',
          'emir-melon': '#FFD369',
          'emir-grey': '#DDDDDD',
          'emir-white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}

