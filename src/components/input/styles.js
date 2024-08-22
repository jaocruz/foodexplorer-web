import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  width: 100%;

  label {
    ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }
  
  section {
    width: 100%;

    display: flex;
    align-items: center;

    gap: 14px;
    padding: 0 14px;
    border-radius: 5px;

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
    height: 48px;

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
    height: 48px;
  }

  div {
    height: 48px;
  }

  textarea {
    resize: none;
    height: 172px;
    padding-top: 16px;
  }
`;