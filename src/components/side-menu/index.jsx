import { Container, NavbarTop } from "./styles";

import { Footer } from "../footer";
import { Input } from "../input";

import { PiX, PiMagnifyingGlass } from "react-icons/pi";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { USER_ROLE } from "../../utils/user-roles";

export function SideMenu({ menuIsOpen, onCloseMenu, onSearch }){
  const { user, signOut } = useAuth();

  const navigate = useNavigate();
  
  const [search, setSearch] = useState("");

  function handleSignOut() {
    navigate("/")
    signOut();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  };

  return(
    <Container data-menu-is-open={menuIsOpen}>
      <NavbarTop>
        <button onClick={onCloseMenu}><PiX size={30}/></button>
        <h1>Menu</h1>
      </NavbarTop>

      <div className="menu-options">
        <Input
          icon={PiMagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          value={search}
          onChange={handleSearch}
        />

        <div className="menu-pages">
          <a href="/">Home</a>
          
          {[USER_ROLE.ADMIN].includes(user.role) &&
            <a href="/new">Novo Prato</a>
          }

          {[USER_ROLE.CUSTOMER].includes(user.role) &&
            <a href="/favorites">Meus Favoritos</a>
          }

          <a href="/orders">Histórico de Pedidos</a>
          <a onClick={handleSignOut}>Sair</a>
        </div>
      </div>

      <Footer/>
    </Container>
  )
}