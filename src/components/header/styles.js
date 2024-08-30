import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 24px 123px;

  display: flex;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  main {
    width: 100%;
    max-width: 1120px;

    gap: 32px;
    display: flex;
    align-items: center;

    input {
      width: 246px;
    }

    h2 {
      white-space: nowrap;
      ${({theme}) => theme.FONTS.ROBOTO_SMALLregular}
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

    column-gap: 10px;

    svg {
      color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    h1 {
      ${({theme}) => theme.FONTS.ROBOTO_BIGGERbold};
    }
  }

  > span {
    margin-top: -6px;
    text-align: right;
    color: ${({theme}) => theme.COLORS.CAKE_200};
    ${({theme}) => theme.FONTS.ROBOTO_SMALLESTregular};
  }
`;