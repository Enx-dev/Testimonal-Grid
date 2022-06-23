/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        moderateViolet: "hsl(263, 55%, 52%)",
        veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishBlue: " hsl(210, 46%, 95%)",
      },
      backgroundImage: {
        firstImg: "url('./images/bg-pattern-quotation.svg')",
      },
      backgroundPosition: {
        firstImg: "90% 0",
      },
    },
  },
  plugins: [],
};
