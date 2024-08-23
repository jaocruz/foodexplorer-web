import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Brand } from "./styles";

import { Button } from "../button";
import { Input } from "../input";

import { PiSignOut, PiHexagonFill, PiMagnifyingGlass  } from "react-icons/pi";

export function Header(){
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

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

        <a onClick={handleSignOut}><PiSignOut size={32}/></a>
      </main>
    </Container>
  )
}