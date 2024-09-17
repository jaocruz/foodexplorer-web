import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
  width: 100%;

  label {
    ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }
  
  section {
    width: 100%;

    display: flex;
    align-items: center;

    gap: 1.4rem;
    padding: 0 1.4rem;
    border-radius: 0.5rem;

    ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    transition: background-color 0.5s ease, outline-color 0.5s ease;

    &:focus-within {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  svg {
    flex-shrink: 0;
    transition: transform 1s ease;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  input {
    width: 100%;
    height: 4.8rem;

    border: none;

    transition: transform 1s ease;

    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  select, textarea {
    width: 100%;
    height: 100%;

    border: none;
    outline: none;

    transition: transform 1s ease;

    background-color: transparent;
    ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  select {
    height: 4.8rem;
  }

  div {
    height: 4.8rem;
  }

  textarea {
    resize: none;
    height: 17.2rem;
    padding-top: 1.6rem;
  }
`;