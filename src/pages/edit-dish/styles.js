import styled from "styled-components";

export const Container = styled.main`

  > a {
    display: flex;
    align-items: center;
    margin: 4rem 0 2.4rem;

    grid-area: voltar;

    ${({theme}) => theme.FONTS.POPPINS_300bold};
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  > h1 {
    margin-bottom: 3.2rem;
    ${({theme}) => theme.FONTS.POPPINS_400medium};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: 768px){
    a{
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  row-gap: 3.2rem;
  margin-bottom: 11.6rem;

  flex-direction: column;

  label {
    margin-bottom: 0.8rem;
  }

  section {
    background-color: ${({theme}) => theme.COLORS.DARK_800};

    &:focus-within {
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }
  }

  > .first-row {
    display: grid;
    column-gap: 3.2rem;

    grid-template-columns: 22.8rem 1fr 36.4rem;

    input[type="file"] {
      opacity: 0;
      z-index: 1;
      position: relative;
    }

    .photo-upload {
      position: absolute;
      z-index: 0;

      gap: 0.8rem;
      padding: 1.8rem;

      display: flex;
      align-items: center;

      > svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      > h1 {
        ${({theme}) => theme.FONTS.POPPINS_100medium};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
      }
    }

    option {
      ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      background-color: ${({theme}) => theme.COLORS.DARK_900};
    }
  }

  > .second-row {
    display: grid;
    column-gap: 3.2rem;

    grid-template-columns: 83.6rem 25.2rem;

    .ingredients {
      display: flex;
      flex-wrap: nowrap;
      
      max-width: 83rem;
      height: fit-content;

      gap: 1.6rem;
      padding: 0.8rem 0;
      align-items: center;

      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        height: 0.8rem;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.DARK_1000};
        border-radius: 0.5rem;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }

  > .fourth-row {
    display: flex;

    gap: 3.2rem;
    justify-content: flex-end;

    button:first-child{
      background-color: ${({theme}) => theme.COLORS.DARK_800};
    }
  }

  @media (max-width: 768px){
    width: 88dvw;
    margin-bottom: 5.3rem;

    .first-row, .second-row{
      display: flex;
      flex-direction: column;

      row-gap: 2.4rem;
    }

    .first-row{
      div:first-child{
        section{
          justify-content: center;
        }
      }

      option{
        ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
      }
    }

    .second-row{
      .ingredients{
        padding: 1.6rem 0;
        flex-wrap: wrap;
      }
    }

    .fourth-row{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;