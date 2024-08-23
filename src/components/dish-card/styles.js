import styled from "styled-components";

export const Container = styled.div`
  height: 462px;
  width: fit-content;
  max-width: 304px;

  padding: 24px;
  border-radius: 8px;

  flex-shrink: 0;
  position: relative;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

  > a {
    position: absolute;
    top: 12px;
    left: 262px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  > .main-info {
    height: 100%;
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      flex-direction: column;

      gap: 15px;
      
      align-items: center;
      justify-content: center;
    }
    
    img {
      width: 176px;
      height: 176px;
    }

    h2 {
      ${({theme}) => theme.FONTS.POPPINS_300bold};
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    p {
      text-align: center;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      ${({theme}) => theme.FONTS.ROBOTO_SMALLERregular};
    }

    h3 {
      color: ${({theme}) => theme.COLORS.CAKE_200};
      ${({theme}) => theme.FONTS.ROBOTO_BIGGESTregular};
    }
  }

  section {
    display: flex;

    gap: 16px;

    align-items: center;
  }
`;