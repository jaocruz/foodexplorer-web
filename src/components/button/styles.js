import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 12px 24px;

  gap: 8px;

  white-space: nowrap;
  transition: background-color 0.4s;
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};

  h1 {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    ${({theme}) => theme.FONTS.POPPINS_100medium};
  }

  &:hover {
    background-color: ${({theme}) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
  }
`;