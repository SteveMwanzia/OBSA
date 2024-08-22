/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'album-Cover': "url('/src/assets/AlbumCover.jpeg')",
        'backinfo': "url('/src/assets/BackGround.jpg')",
        'discography': "url('/src/assets/Discograpy.jpg')",
        'fin-notes': "url('/src/assets/Finishing.jpg')",
        'Landing': "url('/src/LandingCollage.jpg')",
      },
      fontFamily: {
        rhinegold:"Rhinegold",
        'Poppins': ['Poppins',]
      }
    },
  },
  plugins: [],
}

