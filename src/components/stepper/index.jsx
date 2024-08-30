import { Container } from "./styles";

import { PiPlus, PiMinus } from "react-icons/pi";

import { useState } from "react";

export function Stepper(){
  const [count, setCount] = useState(1);

  function increment(){
    setCount(prevCount => Math.min(9, prevCount + 1));
  };

  function decrement(){
    setCount(prevCount => Math.max(1, prevCount - 1));
  }

  return (
    <Container>
      <a onClick={decrement}><PiMinus size={24}/></a>
      <h1>0{count}</h1>
      <a onClick={increment}><PiPlus size={24}/></a>
    </Container>
  )
}