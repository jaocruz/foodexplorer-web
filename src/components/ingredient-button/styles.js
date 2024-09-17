import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;

  height: 3.2rem;

  padding: 1rem 1.6rem;
  border-radius: 0.8rem;

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_600}` : "none"};
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT_600};

  > input, button {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
  }

  > input {
    width: ${({isNew}) => isNew ? '6.6rem' : '2rem'};
  }

  > button {
    margin-left: 0.4rem;
  }
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
