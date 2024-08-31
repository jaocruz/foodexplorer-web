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
        align-items: center;
        column-gap: 8px;
      }

      .order-status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      .pendente {
        background-color: ${({theme}) => theme.COLORS.TOMATO_300};
      }

      .preparando {
        background-color: ${({theme}) => theme.COLORS.CARROT};
      }

      .entregue {
        background-color: ${({theme}) => theme.COLORS.MINT};
      }
    }

    th:first-child {
  border-top-left-radius: 8px; /* Arredonda o canto superior esquerdo do cabeçalho */
}

th:last-child {
  border-top-right-radius: 8px; /* Arredonda o canto superior direito do cabeçalho */
}

tr:last-child td:first-child {
  border-bottom-left-radius: 8px; /* Arredonda o canto inferior esquerdo da última linha */
}

tr:last-child td:last-child {
  border-bottom-right-radius: 8px; /* Arredonda o canto inferior direito da última linha */
}
  }
`;