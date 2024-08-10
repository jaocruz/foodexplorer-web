import { Container } from "./styles";

import { PiPlus, PiMinus } from "react-icons/pi";

export function Stepper(){
  return (
    <Container>
      <a href="#"><PiMinus size={24}/></a>
      <h1>01</h1>
      <a href="#"><PiPlus size={24}/></a>
    </Container>
  )
}