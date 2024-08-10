import { Container } from "./styles";

import { PiHexagonFill } from "react-icons/pi";

export function Footer(){
  return (
    <Container>
      <div>
        <PiHexagonFill size={30}/>
        <h1>food explorer</h1>
      </div>

      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}