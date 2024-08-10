import { css } from "styled-components";

export default {

  COLORS: {
    LIGHT_100: "#FFFFFF",
    LIGHT_200: "#FFFAF1",
    LIGHT_300: "#E1E1E6",
    LIGHT_400: "#C4C4CC",
    LIGHT_500: "#7C7C8A",
    LIGHT_600: "#76797B",
    LIGHT_700: "#4D585E",

    DARK_100: "#000405",
    DARK_200: "#00070A",
    DARK_300: "#000204",
    DARK_400: "#000A0F",
    DARK_500: "#000C12",
    DARK_600: "#00111A",
    DARK_700: "#001119",
    DARK_800: "#0D161B",
    DARK_900: "#0D1D25",
    DARK_1000: "#192227",

    GRADIENT_100: "linear-gradient(to left, rgba(0, 10, 15, 0), rgba(0, 10, 15, 1))",
    GRADIENT_200: "linear-gradient(to bottom, rgba(9, 30, 38, 1), rgba(0, 19, 28, 1))",

    TOMATO_100: "#750310",
    TOMATO_200: "#92000E",
    TOMATO_300: "#AB222E",
    TOMATO_400: "#AB4D55",

    CARROT: "#FBA94C",

    MINT: "#04D361",

    CAKE_100: "#065E7C",
    CAKE_200: "#82F3FF",
  },

  FONTS: {
    POPPINS_100medium: css `
      font-family: "Poppins";
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    `,

    POPPINS_200medium: css `
      font-family: "Poppins";
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
    `,

    POPPINS_300bold: css `
      font-family: "Poppins";
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
    `,

    POPPINS_300regular: css `
      font-family: "Poppins";
      font-weight: 300;
      font-size: 24px;
      line-height: 140%;
    `,

    POPPINS_400medium: css `
      font-family: "Poppins";
      font-weight: 400;
      font-size: 32px;
      line-height: 140%;
    `,

    POPPINS_500medium: css `
      font-family: "Poppins";
      font-weight: 400;
      font-size: 40px;
      line-height: 140%;
    `,

    ROBOTO_SMALLESTregular: css `
      font-family: "Roboto";
      font-weight: 300;
      font-size: 12px;
      line-height: 160%;
    `,

    ROBOTO_SMALLERregular: css `
      font-family: "Roboto";
      font-weight: 300;
      font-size: 14px;
      line-height: 160%;
    `,

    ROBOTO_SMALLERbold: css `
      font-family: "Roboto";
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
    `,

    ROBOTO_SMALLspaced: css `
      font-family: "Roboto";
      font-weight: 300;
      font-size: 16px;
      line-height: 160%;
    `,

    ROBOTO_SMALLregular: css `
      font-family: "Roboto";
      font-weight: 300;
      font-size: 16px;
      line-height: 100%;
    `,

    ROBOTO_BIGbold: css `
      font-family: "Roboto";
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
    `,

    ROBOTO_BIGGERbold: css `
      font-family: "Roboto";
      font-weight: 700;
      font-size: 24px;
      line-height: 100%;
    `,

    ROBOTO_BIGGESTregular: css `
      font-family: "Roboto";
      font-weight: 400;
      font-size: 32px;
      line-height: 160%;
    `,

    ROBOTO_GIANTbold: css `
      font-family: "Roboto";
      font-weight: 700;
      font-size: 42px;
      line-height: 160%;
    `,
  }
}