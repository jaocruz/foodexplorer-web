import styled from "styled-components";

export const Container = styled.main`

  > h1 {
    margin: 34px 0;
    ${({theme}) => theme.FONTS.POPPINS_400medium};
  }

  > section {
    max-width: 1120px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    gap: 48px;

    .favorite-dishes {
      display: flex;
      align-items: center;

      padding: 16px 0;
      column-gap: 12px;

      img {
        width: 72px;
        height: 72px;
      }

      h1 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        ${({theme}) => theme.FONTS.POPPINS_200medium};
      }

      a {
        color: ${({theme}) => theme.COLORS.TOMATO_400};
        ${({theme}) => theme.FONTS.ROBOTO_SMALLESTregular};
      }
    }
  }
`;