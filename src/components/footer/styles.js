import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 24px 123px;

  display: flex;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  main {
    width: 100%;
    max-width: 1366px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      gap: 10px;
      display: flex;
      align-items: center;
      white-space: nowrap;

      svg {
        color: ${({theme}) => theme.COLORS.LIGHT_700};
      }

      h1 {
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        ${({theme}) => theme.FONTS.ROBOTO_BIGGERbold}
      }
    }

    > span {
      white-space: nowrap;
      color: ${({theme}) => theme.COLORS.LIGHT_200};
      ${({theme}) => theme.FONTS.ROBOTO_SMALLERregular}
    }
  }
`;