/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./templates/**/*.html", "./assets/js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '10px',
        md: '0',
        mdl: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdl': '900px',
      // => @media (min-width: 900px) { ... }
      'lg': '1080px',
      // => @media (min-width: 1080px) { ... }
      'xl': '1290px',
      // => @media (min-width: 1290px) { ... }
      '2xl': '1290px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'blackBlue': '#002E47',
      'blue': '#39B4EF',
      'blue2': '#058FD1',
      'blueDark': '#21A4E3',
      'lightBlue': '#DCF8FF',
      'lightBlue2': '#c4e9fb',
      'textGray': '#707E95',
      'gray': '#E2EDFF',
      'gray2': '#F3F8FF',
      'red': '#EF6079',
      'iconGray': '#B3C7EB',
      'borderGray': '#BACFF1',
      'hawkesBlue': '#BACFF1',
      'yellow': '#FFB618',
      'linkedin': '#2E78B6',
      'green': '#1CC9BD',
    },
    fontFamily: {
      'inter': ['Inter'],
      'body': ['Open Sans'],
    },
    extend: {
      fontSize: {
        'base-15': ['15px', '20px'],
        '2xl': ['22px', '26px'],
        '2.5xl': ['28px', '33px'],
        '3xl': ['32px', '38px'],
        '5xl': ['40px', '48px'],
        'body': ['22px', '32px'],
      },
      padding: {
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '40px': '40px',
      },
      spacing: {
        '5px': '5px',
        '7px': '7px',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '80px': '80px',
        '100px': '100px',
        '120px': '120px',
        '150px': '150px',
        '160px': '160px',
      },
      boxShadow: {
        'shadow': '0 5px 15px -1px rgba(111, 111, 111, 0.25)',
        'card': '0px 5px 15px -1px rgba(111, 111, 111, 0.25)',
        'shadow-lg': '0px 2px 15px 3px rgba(111, 111, 111, 0.25)',
      },
      maxWidth: {
        '300px': '300px',
      },
      borderRadius: {
        '4px':'4px',
        '10px':'10px',
        '15px':'15px',
        '20px':'20px',
        '30px':'30px',
        '40px':'40px'
      },
      backgroundImage: {
        'particles': "url('../../images/global/particles.svg')",
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
      gridTemplateColumns: {
        'legal': '9fr 3fr',
        '7-5': '7fr 5fr',
        'alternative': '8fr 4fr',
        'company': '1fr 220px',
        'search': '3fr 9fr',
        'letters': '1fr 11fr',
      },
      width: {
        '1/10': '10%',
      },
      height: {
        '1/10': '10%',
      }
    }
  },
  plugins: [],
}
