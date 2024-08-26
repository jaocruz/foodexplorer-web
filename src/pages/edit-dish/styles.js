import styled from "styled-components";

export const Container = styled.main`

  > a {
    display: flex;
    align-items: center;
    margin: 40px 0 24px;

    grid-area: voltar;

    ${({theme}) => theme.FONTS.POPPINS_300bold};
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    svg {
      width: 32px;
      height: 32px;
    }
  }

  > h1 {
    margin-bottom: 32px;
    ${({theme}) => theme.FONTS.POPPINS_400medium};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`;

export const Form = styled.form`
  display: flex;
  row-gap: 32px;
  margin-bottom: 116px;

  flex-direction: column;

  label {
    margin-bottom: 8px;
  }

  section {
    background-color: ${({theme}) => theme.COLORS.DARK_800};

    &:focus-within {
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }
  }

  > .first-row {
    display: grid;
    column-gap: 32px;

    grid-template-columns: 228px 1fr 364px;

    input[type="file"] {
      opacity: 0;
      z-index: 1;
      position: relative;
    }

    .photo-upload {
      position: absolute;
      z-index: 0;

      gap: 8px;
      padding: 18px;

      display: flex;
      align-items: center;

      > svg {
        width: 24px;
        height: 24px;
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
    column-gap: 32px;

    grid-template-columns: 836px 252px;

    .ingredients {
      display: flex;
      flex-wrap: nowrap;
      
      max-width: 830px;
      height: fit-content;

      gap: 16px;
      padding: 8px 0;
      align-items: center;

      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        height: 8px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.DARK_1000};
        border-radius: 5px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }

  > .fourth-row {
    display: flex;

    gap: 32px;
    justify-content: flex-end;

    button:first-child{
      background-color: ${({theme}) => theme.COLORS.DARK_800};
    }
  }
`;