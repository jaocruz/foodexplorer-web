import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

  padding: 4px 8px;
  border-radius: 5px;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};

  h1 {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    ${({theme}) => theme.FONTS.POPPINS_100medium};
  }
`;