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
      white-space: nowrap;
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

  @media (max-width: 768px){
    width: 21.0rem;
    height: 29.2rem;
    padding: 2.4rem;

    svg:first-child{
      left: 17rem;
    }

    .main-info{
      row-gap: 1.2rem;

      display: flex;
      flex-direction: column;
      
      img{
        width: 8.8rem !important;
        height: 8.8rem !important;
      }

      h2{
        ${({theme}) => theme.FONTS.POPPINS_100medium};
      }

      p{
        display: none !important;
      }

      h3{
        ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
      }

      section{
        width: 100%;

        display: flex;
        flex-direction: column;
        
        button{
          width: 100%;
          height: 3.2rem;
        }
      }
    }
  }
`;