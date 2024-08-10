import { Container, Brand } from "./styles";

import { Button } from "../button";
import { Input } from "../input";

import { PiSignOut, PiHexagonFill, PiMagnifyingGlass  } from "react-icons/pi";

export function Header(){
  return (
    <Container>
      <main>
        <Brand>
          <div className="main-brand">
            <PiHexagonFill size={32}/>
            <h1>food explorer</h1>
          </div>

          <span>admin</span>
        </Brand>

        <Input icon={PiMagnifyingGlass} placeholder="Busque por pratos ou ingredientes"/>

        <Button title="Novo prato"/>

        <a href="#"><PiSignOut size={32}/></a>
      </main>
    </Container>
  )
}