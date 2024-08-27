import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { Container, Brand } from "./styles";

import { Button } from "../button";
import { Input } from "../input";

import { PiSignOut, PiHexagonFill, PiMagnifyingGlass, PiReceipt  } from "react-icons/pi";

import { useState } from "react";

export function Header({ onSearch }){
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  };

  const navigate = useNavigate();

  const { signOut, user } = useAuth();

  function handleSignOut() {
    navigate("/")
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

            {[USER_ROLE.ADMIN].includes(user.role) && <span>admin</span> }
          </Brand>
        </Link>

        <Input
          icon={PiMagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          value={search}
          onChange={handleSearch}
        />

        {[USER_ROLE.ADMIN].includes(user.role) &&
          <Link to="/new">
            <Button title="Novo prato"/>
          </Link>
        }

        {[USER_ROLE.CUSTOMER].includes(user.role) &&
          <Link to="#">
            <Button icon={PiReceipt} title="Pedidos (0)"/>
          </Link>
        }

        <a onClick={handleSignOut}><PiSignOut size={32}/></a>
      </main>
    </Container>
  )
}