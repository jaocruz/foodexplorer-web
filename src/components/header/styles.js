import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 24px 123px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  div {
    justify-content: center;

    &:focus-within svg, &:focus-within input {
    transform: translateX(-125px);
  }

  }
  button {
    width: 216px;
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