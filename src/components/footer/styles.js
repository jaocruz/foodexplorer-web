import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 2.4rem 12.3rem;

  display: flex;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  main {
    width: 100%;
    max-width: 112rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      gap: 1rem;
      display: flex;
      align-items: center;
      white-space: nowrap;

      svg {
        color: ${({theme}) => theme.COLORS.LIGHT_700};
      }

      h1 {
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        ${({theme}) => theme.FONTS.ROBOTO_BIGGERbold}
        font-size: 2.4rem;
      }
    }

    > span {
      white-space: nowrap;
      color: ${({theme}) => theme.COLORS.LIGHT_200};
      ${({theme}) => theme.FONTS.ROBOTO_SMALLERregular}
    }
  }

  @media (max-width: 1024px){
    padding: 0;

    main {
      padding: 2.4rem 2.8rem;
    }

    div {
      gap: 0.6rem !important;
    }

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }

    h1 {
      font-size: 1.6rem !important;
    }

    span {
      font-size: 1.2rem !important;
    }
  }
`;