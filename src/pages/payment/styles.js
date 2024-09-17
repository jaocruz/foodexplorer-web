import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;

  grid-template-areas:
  "meupedido pagamento"
  "section payment";

  padding-bottom: 5.4rem;
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  .meupedido{
    grid-area: meupedido;
  }

  .pagamento{
    grid-area: pagamento;
  }

  > h1 {
    margin: 3.4rem 0;
    ${({theme}) => theme.FONTS.POPPINS_400medium};
  }

  > section {
    display: grid;

    grid-template-areas:
    "pedido"
    "total";

    grid-template-rows: 1fr auto;

    width: 44.4rem;
    max-height: 46.2rem;

    grid-area: section;

    .pedido {
      grid-area: pedido;
      overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.6rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({theme}) => theme.COLORS.DARK_800};
      border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    }

    h2 {
      ${({theme}) => theme.FONTS.POPPINS_200medium};
      grid-area: title;
    }

    .total {
      grid-area: total;
      padding-top: 0.8rem;
    }
  }

  @media (min-width: 769px){
    section{
      button{
        display: none;
      }
    }
  }

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 5.6rem 2.6rem;
    
    > section{
      width: 100%;
      max-height: 58dvh;

      row-gap: 3.8rem;

      grid-template-areas:
      "pedido" "total" "button";

      button{
        grid-area: button;
      }
    }
    
    .pedido{
      div{
        width: fit-content;
      }
    }

    .pagamento{
      display: none;
    }

    &.show-payment .pagamento{
      display: block;
    }

    .meupedido{
      display: block;
    }

    &.show-payment .meupedido{
      display: none;
    }

    &.show-payment section{
      display: none;
    }

    > h1{
      margin-top: 1.2rem;
    }
  }
`;

export const DishSection = styled.div`
  width: 40.3rem;
  display: flex;

  padding: 1.6rem 0;

  gap: 1.2rem;
  align-items: center;

  > img {
    width: 7.2rem;
    height: 7.2rem;
  }

  > .dish-info {
    display: grid;
    width: 70%;

    grid-template-areas:
    "title price"
    "delete .";
      
    height: 52px;
    align-items: center;
    column-gap: 1rem;

    h2 {
      white-space: nowrap;
      grid-area: title;
      ${({theme}) => theme.FONTS.POPPINS_200medium};
    }

    span {
      text-align: right;
      grid-area: price;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      ${({theme}) => theme.FONTS.ROBOTO_SMALLESTregular};
    }

    a {
      grid-area: delete;
      width: fit-content;
      color: ${({theme}) => theme.COLORS.TOMATO_400};
      ${({theme}) => theme.FONTS.ROBOTO_SMALLESTregular};
    }
  }

  @media (max-width: 768px){
    .dish-info{
      display: grid;

      grid-template-areas:
      "title title"
      "price delete";

      grid-template-columns: auto 1fr;

      justify-items: start;
      width: fit-content;
    }
  }
`;

export const PaymentModal = styled.div`
  width: 53rem;
  grid-area: payment;

  > .payment-method {
    display: grid;
    grid-template-columns: 1fr 1fr;
  
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    .pix:hover, .credit:hover{
      background-color: ${({theme}) => theme.COLORS.DARK_500};
    }

    .pix.selected, .credit.selected {
      background-color: ${({theme}) => theme.COLORS.DARK_800};
    }

    .pix, .credit {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      height: 8.1rem;
      padding: 1.2rem 1.4rem;

      gap: 0.8rem;

      transition: 0.1s ease-in-out;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      h1 {
        ${({theme}) => theme.FONTS.ROBOTO_SMALLregular}
      }
    }

    .pix {
      border-top-left-radius: 0.8rem;
      border-top: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
      border-left: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
    }

    .credit {
      border-top-right-radius: 0.8rem;
      border-top: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
      border-left: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
      border-right: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
    }
  }

  > .payment-info {
    display: flex;
    padding: 4.8rem;
    justify-content: center;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
  }

  form {
    width: 34.8rem;
    row-gap: 3.8rem;

    display: flex;
    flex-direction: column;

    section {
      background-color: transparent;
      border: solid 1px ${({theme}) => theme.COLORS.LIGHT_400};
    }

    .second-row {
      display: flex;
      column-gap: 1.6rem;
    }
  }

  .checkout-payment, .aproved-payment, .delivered-order {
    display: flex;
    flex-direction: column;

    row-gap: 3.6rem;
    align-items: center;

    svg {
      width: 12.8rem;
      height: 12.8rem;
      color: ${({theme}) => theme.COLORS.LIGHT_600};
    }

    h1 {
      ${({theme}) => theme.FONTS.ROBOTO_BIGGERbold}
      color: ${({theme}) => theme.COLORS.LIGHT_600};
    }
  }

  @media (max-width: 768px){
    display: ${({ showPayment }) => (showPayment ? 'grid' : 'none')};
    width: 37.5rem;

    .payment-info{
      width: 37.5rem;
      padding: 5.6rem 2.7rem;

      section {
        display: block;
      }

      img{
        width: 18rem;
        height: 18rem;
      }
    }

    .checkout-payment, .aproved-payment, .delivered-order{
      row-gap: 2.4rem;
      padding: 6rem 0;

      svg{
        width: 9.6rem;
        height: 9.6rem;
      }

      h1{
        ${({theme}) => theme.FONTS.ROBOTO_BIGbold}
      }
    }
  }
`;