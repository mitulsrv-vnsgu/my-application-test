module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        red_600: "#e23434",
        gray_900_ab: "#181a26ab",
        gray_500_3f: "#93989a3f",
        indigo_A200: "#6271eb",
        gray_400_4c: "#cacaca4c",
        blue_A200: "#4196fa",
        red_500: "#ea4335",
        blue_A201: "#4285f4",
        green_601: "#34a853",
        green_600: "#42a846",
        gray_50: "#f6f8f9",
        black_900: "#010101",
        white_A700_ab: "#ffffffab",
        black_901: "#0f0f0f",
        gray_400_33: "#cacaca33",
        indigo_A200_54: "#6170eb54",
        gray_400: "#b7babc",
        gray_900_26: "#130c1a26",
        gray_500: "#93989a",
        gray_901: "#181a26",
        amber_500: "#fbbc05",
        white_A700_a2: "#ffffffa2",
        gray_900: "#15161d",
        gray_900_67: "#15161d67",
        gray_300: "#dbdddd",
        gray_100: "#f3f3f3",
        gray_500_ab: "#93989aab",
        gray_900_5f: "#15161d5f",
        white_A700: "#ffffff",
      },
      boxShadow: {
        bs2: "0px 4px  100px 0px #cacaca4c",
        bs1: "0px 4px  100px 0px #cacaca33",
        bs: "0px 4px  80px 0px #93989a3f",
      },
      fontFamily: { outfit: "Outfit", urbanist: "Urbanist" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#6271eb,#6170eb54)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
