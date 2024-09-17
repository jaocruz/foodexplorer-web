import styled from "styled-components";

export const Container = styled.button`
  max-height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;

  gap: 0.8rem;
  flex-shrink: 0;

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