import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  gap: 30.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px){
    gap: 7.4rem;
    flex-direction: column;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  margin-top: -4%;

  gap: 1.9rem;

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

  gap: 3.2rem;

  padding: 6.4rem;
  border-radius: 1.6rem;
  background-color: ${({theme}) => theme.COLORS.DARK_700};

  > h1 {
    text-align: center;
    ${({theme}) => theme.FONTS.POPPINS_400medium}
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  > div {
    width: 34.8rem;
  }

  > a {
    text-align: center;
    ${({theme}) => theme.FONTS.POPPINS_100medium}
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: 768px){
    background: none;
    padding: 0;

    > h1 {
      display: none;
    }
  }
`;