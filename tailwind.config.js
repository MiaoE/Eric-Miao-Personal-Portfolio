/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homebg' : "url('/public/assets/bgimghome.jpg')",
        'autoimmunebg' : "url('/public/assets/AutoImmuneSnap.png')",
        'duberbg' : "url('/public/assets/DubersRevengeSnap.jpg')",
        'campbg' : "url('/public/assets/campbg.jpg')",
        'uoftbg' : "url('/public/assets/uoftbg.jpg')",
        'lostpathbg' : "url('/public/assets/lostpathSnap.png')",
        'flightbg' : "url('/public/assets/flightSnap.jpg')",
      }
    },
  },
  plugins: [],
}
