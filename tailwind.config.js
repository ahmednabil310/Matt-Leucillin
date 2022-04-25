module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#57198B",
        "light-purple": "#A759C6",
        "eclipse-grey": "#DEDEDE",
        "eclipse-purple": "#340A54",
        "revolution-grey": "#EEE8F4",
      },
      fontFamily: {
        kalam: "Kalam, cursive",
        nunito: "Nunito\\ Sans , sans-serif",
      },
      height: {
        "50px": "3.125rem",
      },
      fontSize: {
        "13px": "0.8125rem",
        "28px": "1.75rem",
        "32px": "2rem",
        "18px": "1.125rem",
        "34px": "2.125rem",
        "40px": "2.5rem",
      },
      spacing: {
        "100px": "6.25rem",
        "120px": "7.5rem",
        "35px": "2.1875rem",
        "30px": "1.875rem",
        "10px": "0.625rem",
        "13px": "0.8125rem",
        "60px": "3.75rem",
        "18px": "1.125rem",
        "50px": "3.125rem",
        "45px": "2.8125rem",
        "87px": "5.438rem",
        "211px": "13.1875rem",
        "11.5px": "0.71875rem",
        "8.5px": "0.53125rem",
        "49px": "3.0625rem",
      },
      lineHeight: {
        "21px": "1.313rem",
        "27px": "1.688rem",
      },
      letterSpacing: {
        wider: ".15em",
      },
      screens: {
        sm: "414px",
        lg: "1280px",
        xl: "1920px",
      },

      backgroundImage: {
        "header-mirror-small":
          "url('/src/assets/images/header-mirror-small.png')",
        "meet-the-family-image":
          "url('/src/assets/images/meet-the-family-image.png')",
        "fernandoe-mate": "url('/src/assets/images/fernandoe-mate-bg.png')",
        "sarandy-westfall": "url('/src/assets/images/sarandy-westfall.png')",
        banner: "url('/src/assets/images/banner-img.png')",
      },
    },
  },
  plugins: [],
};
