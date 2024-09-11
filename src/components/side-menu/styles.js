import styled from "styled-components";

export const Container = styled.aside`
  width: 100dvw;
  height: 100dvh;
  
  display: grid;
  grid-template-rows: auto 1fr auto;

  display: none;

  background-color: ${({theme}) => theme.COLORS.DARK_400};

  .menu-options{
    padding: 3.6rem 2.8rem;
  }

  .menu-pages{
    display: flex;
    flex-direction: column;

    padding: 5.6rem 0;

    a{
      font-size: 2.4rem;
      font-weight: 200;
      font-family: "Poppins";

      border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

      padding: 1rem;
    }
  }

  @media (max-width: 768px){
    display: grid;
    position: fixed;

    z-index: 2;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"]{
      transform: translateX(0%);
    }
  } 
`;

export const NavbarTop = styled.header`
  height: 11.4rem;

  display: flex;
  align-items: center;

  column-gap: 1.6rem;
  padding: 5.6rem 2.8rem 2.4rem;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  button{
    border: none;
    outline: none;
    background: none;
  }

  h1{
    font-family: roboto;
    font-weight: 300;
    font-size: 2.1rem;
  }
`;