import { Link } from "react-router-dom";

import { Container, Brand } from "./styles";

import { Button } from "../button";
import { Input } from "../input";

import { PiSignOut, PiHexagonFill, PiMagnifyingGlass  } from "react-icons/pi";

export function Header(){
  return (
    <Container>
      <main>
        <Link to="/">
          <Brand>
            <div className="main-brand">
              <PiHexagonFill size={32}/>
              <h1>food explorer</h1>
            </div>

            <span>admin</span>
          </Brand>
        </Link>

        <Input icon={PiMagnifyingGlass} placeholder="Busque por pratos ou ingredientes"/>
        
        <Link to="new">
          <Button title="Novo prato"/>
        </Link>

        <Link to="/"><PiSignOut size={32}/></Link>
      </main>
    </Container>
  )
}