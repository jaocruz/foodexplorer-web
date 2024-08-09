import { Container, Brand } from "./styles";

import { Button } from "../button";

import { PiSignOut, PiHexagonFill } from "react-icons/pi";


export function Header(){
  return (
    <Container>
      <Brand>
        <div className="main-brand">
          <PiHexagonFill size={32}/>
          <h1>food explorer</h1>
        </div>

        <span>admin</span>
      </Brand>

      <input type="text" placeholder="Busque por pratos ou ingredientes"/>

      <Button title="Novo prato"/>

      <a href="#"><PiSignOut size={32}/></a>
    </Container>
  )
}