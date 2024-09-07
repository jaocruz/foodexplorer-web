import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  gap: 306px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px){
    gap: 74px;
    flex-direction: column;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  margin-top: -4%;

  gap: 19px;

  > svg {
    color: ${({theme}) => theme.COLORS.CAKE_100};
  }

  > h1 {
    ${({theme}) => theme.FONTS.ROBOTO_GIANTbold}
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 32px;

  padding: 64px;
  border-radius: 16px;
  background-color: ${({theme}) => theme.COLORS.DARK_700};

  > h1 {
    text-align: center;
    ${({theme}) => theme.FONTS.POPPINS_400medium}
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  > div {
    width: 348px;
  }

  > a {
    text-align: center;
    ${({theme}) => theme.FONTS.POPPINS_100medium}
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: 1024px){
    height: 416px;
    padding: 0;
    
    background: none;

    > h1 {
      display: none;
    }
  }
`;