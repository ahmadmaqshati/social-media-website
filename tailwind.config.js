const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textShadow: {
        'custom': '0 2px 20px rgba(0, 0, 0, 0.5)', // إضافة تأثير ظل مخصص
      },
      variants: {
        textShadow: ['responsive', 'hover', 'focus'],
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        'hairline': 100, // وزن خط مخصص

      },
    },
  },
  /* plugins: [], */
  plugins: [
    require('tailwindcss-animated'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
        },
      })
    }
  ],
};


