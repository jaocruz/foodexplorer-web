import { Container } from "./styles";

import { PiHeartStraight } from "react-icons/pi";

import { Button } from "../button";
import { Stepper } from "../stepper";

export function DishCard(){
  return (
    <Container>
      <a href="#"><PiHeartStraight size={24}/></a>

      <img src="/public/Mask group-1.png" alt="" />

      <h2>Torradas de Parma</h2>

      <p>
        Presunto de parma e rúcula em um pão com fermentação natural.
      </p>

      <h3>R$ 25,97</h3>

      <section>
        <Stepper />
        <Button title="incluir"/>
      </section>
    </Container>
  )
}