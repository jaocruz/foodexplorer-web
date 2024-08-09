import { Container } from "./styles";

import { PiPlus, PiMinus } from "react-icons/pi";

export function Stepper(){
  return (
    <Container>
      <PiMinus size={24}/>
      <h1>01</h1>
      <PiPlus size={24}/>
    </Container>
  )
}