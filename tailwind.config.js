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
        '96': '24rem',
        '128': '32rem',
      }
    },
  },
  variants: {
    margin: ['responsive', 'last', 'hover', 'focus'],
  },
}