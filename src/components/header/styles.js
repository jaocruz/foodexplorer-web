import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 2.4rem 12.3rem;

  display: flex;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  main {
    width: 100%;
    max-width: 112rem;

    gap: 3.2rem;
    display: flex;
    align-items: center;

    input {
      width: 24.6rem;
    }

    h2 {
      white-space: nowrap;
      ${({theme}) => theme.FONTS.ROBOTO_SMALLregular}
    }
  }

  @media (max-width: 1024px){
    padding: 5.6rem 2.8rem 2.4rem;
    height: 11.4rem;

    > main {
      display: grid;

      grid-template-areas:
      "menu brand button";

      justify-content: space-between;

      :first-child{
        grid-area: menu;
      }

      a:nth-child(6){
        grid-area: button;
        width: fit-content;
      }

      button{
        background: none;
        padding: 0;

        h1 {
          display: none;
        }
      }

      h2, div:nth-child(3), a:last-child{
        display: none;
      }
    }
  }
`;

export const Brand = styled.div`
  display: grid;

  grid-template-areas:
  "main"
  "span";

  white-space: nowrap;

  > .main-brand {
    display: flex;
    align-items: center;

    column-gap: 1rem;

    svg {
      color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    h1 {
      ${({theme}) => theme.FONTS.ROBOTO_BIGGERbold};
    }
  }

  > span {
    text-align: right;
    color: ${({theme}) => theme.COLORS.CAKE_200};
    ${({theme}) => theme.FONTS.ROBOTO_SMALLESTregular};
  }

  @media (max-width: 1024px){
    display: flex;

    gap: 0.8rem;
    align-items: center;
  }
`;