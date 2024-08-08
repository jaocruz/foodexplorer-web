import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({theme}) => theme.COLORS.CAKE_100};

  h1 {
    ${({theme}) => theme.FONTS.POPPINS_100medium}
  }
`;