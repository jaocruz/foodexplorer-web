import styled from "styled-components";

export const Container = styled.main`

  > a {
    display: flex;
    align-items: center;
    margin: 4rem 0 4.2rem;

    grid-area: voltar;

    ${({theme}) => theme.FONTS.POPPINS_300bold};
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  > .dish {
    display: flex;
    column-gap: 4.8rem;
    align-items: center;

    img {
      width: 39rem;
      height: 39rem;
      grid-area: img;
    }

    .dish-details {
      grid-area: info;

      display: flex;
      flex-direction: column;

      row-gap: 2.4rem;

      > h1 {
        ${({theme}) => theme.FONTS.POPPINS_500medium};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }

      > span {
        ${({theme}) => theme.FONTS.POPPINS_300regular};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }

      > .ingredients {
        display: flex;
        gap: 1.2rem;
        margin-bottom: 2.4rem;
      }

      > section {
        display: flex;
        align-items: center;

        gap: 3.4rem;
      }
    }
  }

  @media (max-width: 768px){
    padding: 1.6rem 5.6rem;

    > a{
      font-weight: 400;
      margin: 3.6rem 0 1.6rem;
    }

    .dish{
      display: flex;
      flex-direction: column;

      row-gap: 1.6rem;
      margin-bottom: 4.8rem;

      img{
        width: 26.4rem;
        height: 26.4rem;
      }

      .dish-details{
        text-align: center;
        align-items: center;

        > h1{
          font-size: 2.7rem;
        }

        > span{
          font-size: 1.6rem;
        }

        .ingredients{
          width: 70dvw;
          flex-wrap: wrap;
          justify-content: center;
        }

        section{
          width: 100%;

          div h1{
            font-weight: 500;
            font-size: 2.2rem;
          }
        }

        .admin-button{
          button{
            width: 100%;
          }
        }
      }
    }
  }
`;