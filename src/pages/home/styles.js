import styled from "styled-components";

export const Container = styled.main`
`;

export const Banner = styled.div`
  height: 260px;
  
  margin: 172px auto 62px;
  border-radius: 8px;
  
  position: relative;

  display: flex;
  justify-content: flex-end;

  background: ${({theme}) => theme.COLORS.GRADIENT_200};

  > img {
    position: absolute;
    top: -140px;
    left: -70px;
  }

  .banner-text {
    display: flex;
    flex-direction: column;
    
    text-align: center;

    gap: 8px;
    margin: 86px 102px 94px 0;

    h1 {
      ${({theme}) => theme.FONTS.POPPINS_500medium}
    }

    span {
      ${({theme}) => theme.FONTS.ROBOTO_SMALLregular}
    }
  }
`;