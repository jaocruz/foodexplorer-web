import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :root{
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.DARK_400};

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({theme}) => theme.COLORS.DARK_800};
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
  }

  #root {
    height: 100vh;
    display: grid;
    grid-template-rows: 96px 1fr 78px;
  }

  main {
    margin: auto;
    height: 100%;
    width: 100%;
    max-width: 1120px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a {
    cursor: pointer;
    border: none;
  }

  svg {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: 768px){
    main{
      padding: 0 2.4rem;
    }
  }
`;