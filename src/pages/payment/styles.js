import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;

  grid-template-areas:
  "h1 h1"
  "section payment";

  padding-bottom: 56px;
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  > h1 {
    margin: 34px 0;
    ${({theme}) => theme.FONTS.POPPINS_400medium};
  }

  > section {
    display: grid;

    grid-template-areas:
    "pedido"
    "total";

    grid-template-rows: 1fr auto;

    width: 444px;
    max-height: 462px;

    grid-area: section;

    .pedido {
      grid-area: pedido;
      overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({theme}) => theme.COLORS.DARK_800};
      border-radius: 5px;
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
      padding-top: 8px;
    }
  }
`;

export const DishSection = styled.div`
  width: 403px;
  display: flex;

  padding: 16px 0;

  gap: 12px;
  align-items: center;

  > img {
    width: 72px;
    height: 72px;
  }

  > .dish-info {
    display: grid;
    width: 70%;

    grid-template-areas:
    "title price"
    "delete .";
      
    height: 52px;
    align-items: center;
    column-gap: 10px;

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
`;

export const PaymentModal = styled.div`
  width: 530px;
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

      height: 81px;
      padding: 12px 14px;

      gap: 8px;

      transition: 0.1s ease-in-out;

      svg {
        width: 24px;
        height: 24px;
      }

      h1 {
        ${({theme}) => theme.FONTS.ROBOTO_SMALLregular}
      }
    }

    .pix {
      border-top-left-radius: 8px;
      border-top: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
      border-left: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
    }

    .credit {
      border-top-right-radius: 8px;
      border-top: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
      border-left: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
      border-right: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
    }
  }

  > .payment-info {
    display: flex;
    padding: 48px;
    justify-content: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: solid 1px ${({theme}) => theme.COLORS.LIGHT_600};
  }

  form {
    width: 348px;
    row-gap: 38px;

    display: flex;
    flex-direction: column;

    section {
      background-color: transparent;
      border: solid 1px ${({theme}) => theme.COLORS.LIGHT_400};
    }

    .second-row {
      display: flex;
      column-gap: 16px;
    }
  }

  .checkout-payment, .aproved-payment, .delivered-order {
    display: flex;
    flex-direction: column;

    row-gap: 36px;
    align-items: center;

    svg {
      width: 128px;
      height: 128px;
      color: ${({theme}) => theme.COLORS.LIGHT_600};
    }

    h1 {
      ${({theme}) => theme.FONTS.ROBOTO_BIGGERbold}
      color: ${({theme}) => theme.COLORS.LIGHT_600};
    }
  }
`;