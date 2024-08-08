import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  body {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.DARK_400};
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`;