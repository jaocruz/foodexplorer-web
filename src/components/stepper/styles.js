import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 32px;

  display: flex;
  align-items: center;
  gap: 14px;

  h1 {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    ${({theme}) => theme.FONTS.ROBOTO_BIGbold};
  }
`;