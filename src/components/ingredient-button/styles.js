import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;

  height: 32px;

  padding: 10px 16px;
  border-radius: 8px;

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
    width: 74px;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;