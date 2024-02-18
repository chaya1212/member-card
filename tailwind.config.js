/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-bg': "url('../assets/image/index_Bg.svg')",
        'img-top': "url('../assets/image/yellow_man.svg')",
        'img-bottom': "url('../assets/image/bottom_circle.svg')",
        'img-title': "url('../assets/image/index_title.svg')",
        'img-start': "url('../assets/image/text_start.svg')",
        'img-header': "url('../assets/image/header.svg')",
        'img-cardPhoto': "url('../assets/image/card_photo.svg')",
        'btn-create': "url('../assets/image/btn_create.svg')",
        'btn-reset': "url('../assets/image/btn_reset.png')",
        'btn-share': "url('../assets/image/btn_share.png')",
        'btn-download': "url('../assets/image/btn_download.png')",
        'bg-rectangle': "url('../assets/image/bg_rectangle.svg')",
       },
       colors: {
        'yellow': '#F2CF4B',
        'cyan': '#25E9F2',
        'red': '#FF5B5B',
        'green': '#72FF5B',
        'pink': '#FB7AC0',
        'lightPink': '#FFE4F3'
      },
      zIndex: {
        '-1': '1',
        '-2': '2',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
