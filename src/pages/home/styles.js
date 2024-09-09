import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
`;

export const Banner = styled.div`
  height: 26rem;
  width: 100%;
  
  margin: 17.2rem auto 6.2rem;
  border-radius: 0.8rem;
  
  position: relative;

  display: flex;
  justify-content: flex-end;

  background: ${({theme}) => theme.COLORS.GRADIENT_200};

  > img {
    position: absolute;
    height: auto;
    top: 25.5%;
    left: 23%;
    transform: translate(-50%, -50%);
  }

  img:nth-child(2){
    opacity: 0;
  }

  .banner-text {
    display: flex;
    flex-direction: column;
    
    text-align: center;

    gap: 0.8rem;
    margin: 8.6rem 10.2rem 9.4rem 0;

    h1 {
      ${({theme}) => theme.FONTS.POPPINS_500medium}
    }

    span {
      ${({theme}) => theme.FONTS.ROBOTO_SMALLregular}
    }
  }

  @media (max-width: 768px){
    width: 100%;
    height: fit-content;

    margin: 6.8rem 0;

    border-radius: 0.28rem;

    img:first-child{
      opacity: 0;
      width: 100%;
    }

    img:nth-child(2){
      opacity: 1;
      
      height: 14.9rem;
      top: 36%;
      left: 18%;
      transform: translate(-50%, -50%);
    }

    .banner-text{
      text-align: left;

      width: 20.2rem;
      margin: 3.6rem 1rem 2.2rem;

      h1{
        font-size: 1.8rem;
        font-weight: 500;
      }

      span{
        font-size: 1.2rem;
        font-weight: 200;
        font-family: "Poppins";
      }
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

  @media (max-width: 768px){
    width: 88dvw;

    .carousel-container{
      overflow-x: scroll;

      &::-webkit-scrollbar {
        width: 0px;
      }
    }

    h1{
      font-size: 1.8rem;
    }
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

  @media (max-width: 768px){
    width: 101%;

    .left-gradient, .right-gradient{
      width: 126px;
      height: 292px;

      pointer-events: none;

      svg{
        display: none;
      }
    }
  }
`;