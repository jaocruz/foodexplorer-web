import styled from "styled-components";

export const Container = styled.main`

  > h1 {
    margin: 34px 0;
    ${({theme}) => theme.FONTS.POPPINS_400medium};
  }

  > table {
    width: 100%;
    text-align: left;
    border-radius: 11px;
    overflow: hidden;
    border-spacing: 0;
    border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};

    th {
      padding: 21px 24px;

      color: ${({theme}) => theme.COLORS.LIGHT_300};
      ${({theme}) => theme.FONTS.ROBOTO_SMALLERbold};

      border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
    }

    td {
      padding: 16px 24px;

      color: ${({theme}) => theme.COLORS.LIGHT_400};
      ${({theme}) => theme.FONTS.ROBOTO_SMALLERregular};
        
      border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};

      section {
        display: flex;
        
        column-gap: 8px;
        cursor: pointer;
        align-items: center;
      }

      .order-status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      .Pendente {
        background-color: ${({theme}) => theme.COLORS.TOMATO_300};
      }

      .Preparando {
        background-color: ${({theme}) => theme.COLORS.CARROT};
      }

      .Entregue {
        background-color: ${({theme}) => theme.COLORS.MINT};
      }
    }

    .admin-select {
      display: flex;
      align-items: center;
      column-gap: 8px;
    }

    th:first-child {
      border-top-left-radius: 8px;
    }

    th:last-child {
      border-top-right-radius: 8px;
    }

    tr:last-child td:first-child {
      border-bottom-left-radius: 8px;
    }

    tr:last-child td:last-child {
      border-bottom-right-radius: 8px;
    }

    div {
      width: 175px;
      padding: 0 16px;
      background-color: ${({theme}) => theme.COLORS.DARK_900};
    }

    select {
      width: 100%;
      height: 48px;

      border: none;
      outline: none;

      background-color: transparent;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      ${({theme}) => theme.FONTS.ROBOTO_SMALLERregular};
    }

    option {
      background-color: ${({theme}) => theme.COLORS.DARK_400};
    }
  }

  @media (max-width: 768px){
    padding: 5.6rem 2.6rem;

    >h1{
      margin-top: 1.2rem;
    }

    table{
      border: none;
    }

    thead{
      display: none;
    }

    tbody{
      display: flex;
      flex-direction: column;

      gap: 2.4rem;
    }

    tbody tr{
      display: grid;

      grid-template-areas:
      "id costumer time"
      "details details details"
      "admin admin admin";

      border-radius: 0.8rem;
      border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
    }

    .costumer{
      grid-area: costumer;
    }

    .admin{
      grid-area: admin;
      padding: 0 1.9rem 2.4rem;
    }

    td:nth-child(1){
      div{
        width: 100%;
        border-radius: 0.5rem;
      }
    }

    td:nth-child(2){
      grid-area: id;
    }

    td:nth-child(3){
      grid-area: details;

      padding-top: 0;

      text-align: justify; 
    }

    td:nth-child(4){
      grid-area: time;
      padding-left: 0;
      white-space: nowrap;
    }

    tbody td{
      border: none;
    }
  }
`;