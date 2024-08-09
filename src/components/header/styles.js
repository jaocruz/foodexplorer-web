import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 24px 123px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  button {
    width: 216px;
  }

  input {
    width: 100%;
    max-width: 581px;

    height: 48px;
    padding: 12px 14px;

    border: none;
    border-radius: 5px;

    color: ${({theme}) => theme.COLORS.LIGHT_500};
    background-color: ${({theme}) => theme.COLORS.DARK_900};

    &::placeholder {
      text-align: center;
    }
  }
`;

export const Brand = styled.div`
  display: grid;

  grid-template-areas:
  "main"
  "span";

  white-space: nowrap;

  .main-brand {
    display: flex;
    align-items: center;

    column-gap: 10px;
  }

  svg {
    color: ${({theme}) => theme.COLORS.CAKE_100};
  }

  h1 {
    ${({theme}) => theme.FONTS.ROBOTO_BIGGERbold};
  }

  span {
    margin-top: -6px;
    text-align: right;
    color: ${({theme}) => theme.COLORS.CAKE_200};
    ${({theme}) => theme.FONTS.ROBOTO_SMALLESTregular};
  }
`;