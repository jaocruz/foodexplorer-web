import styled from "styled-components";

export const Container = styled.div`
  height: 462px;
  width: 304px;

  padding: 24px;
  border-radius: 8px;

  flex-shrink: 0;
  position: relative;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

  > svg {
    position: absolute;
    cursor: pointer;

    top: 12px;
    left: 262px;

    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  > .main-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
      cursor: pointer;
    }

    h2 {
      cursor: pointer;
      ${({theme}) => theme.FONTS.POPPINS_300bold};
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    p {
      width: 256px;
      
      overflow: hidden;
      text-overflow: ellipsis;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

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