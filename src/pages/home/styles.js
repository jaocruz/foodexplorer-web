import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
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

export const Carousel = styled.section`
  overflow: hidden;
  margin-bottom: 48px;

  > h1 {
    margin-bottom: 24px;
    ${({theme}) => theme.FONTS.POPPINS_400medium}
  }

  > section {
    max-width: 1120px;
    position: relative;

  }

  .carousel-container {
    display: flex;
    gap: 28px;
    transition: transform 0.5s ease-in-out;
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 464px;

  pointer-events: none;

  display: grid;
  grid-template-areas:
  "left-gradient right-gradient";

  position: absolute;
  justify-content: space-between;

  .left-gradient, .right-gradient {
    width: 276px;
    height: 462px;

    z-index: 1;

    display: flex;

    svg {
      width: 40px;
      height: 100%;

      pointer-events: all;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }

  .left-gradient {
    justify-content: flex-start;
    background: ${({theme}) => theme.COLORS.GRADIENT_100l};
  }

  .right-gradient {
    justify-content: flex-end;
    background: ${({theme}) => theme.COLORS.GRADIENT_100r};
  }

  .hidden {
    opacity: 0;
    pointer-events: none;

    svg {
      cursor: default;
    }
  }

  .visible {
    opacity: 1;
    pointer-events: all;
  }
`;