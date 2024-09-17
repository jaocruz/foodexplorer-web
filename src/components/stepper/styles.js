import styled from "styled-components";

export const Container = styled.div`
  width: 10rem;
  height: 3.2rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  h1 {
    ${({theme}) => theme.FONTS.ROBOTO_BIGbold};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: 768px){
    h1{
      ${({theme}) => theme.FONTS.ROBOTO_SMALLregular};
    }
  }
`;