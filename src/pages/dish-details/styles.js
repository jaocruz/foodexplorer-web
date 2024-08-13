import styled from "styled-components";

export const Container = styled.main`

  > a {
    display: flex;
    align-items: center;
    margin: 40px 0 42px;

    grid-area: voltar;

    ${({theme}) => theme.FONTS.POPPINS_300bold};
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    svg {
      width: 32px;
      height: 32px;
    }
  }

  > .dish {
    display: flex;
    column-gap: 48px;
    align-items: center;

    img {
      width: 390px;
      height: 390px;
      grid-area: img;
    }

    .dish-details {
      grid-area: info;

      display: flex;
      flex-direction: column;

      row-gap: 24px;

      > h1 {
        ${({theme}) => theme.FONTS.POPPINS_500medium};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }

      > span {
        ${({theme}) => theme.FONTS.POPPINS_300regular};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }

      > .ingredients {
        display: flex;
        gap: 12px;
        margin-bottom: 24px;
      }

      > section {
        display: flex;
        align-items: center;

        gap: 34px;
      }
    }
  }
`;