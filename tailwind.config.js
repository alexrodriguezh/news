module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
      modak: ['Modak'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        redancash: "#FF0032"
      },
      spacing: {
        '52': '13rem',
        '96': '24rem',
        '128': '32rem',
      }
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    }
  },
  variants: {
    margin: ['responsive', 'last', 'hover', 'focus', 'disabled'],
    aspectRatio: ['responsive'],
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ]
}