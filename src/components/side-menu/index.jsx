import { Container, NavbarTop } from "./styles";

import { Footer } from "../footer";
import { Input } from "../input";

import { PiX, PiMagnifyingGlass } from "react-icons/pi";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { USER_ROLE } from "../../utils/user-roles";

export function SideMenu({ menuIsOpen, onCloseMenu }){
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/")
    signOut();
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
        />

        <div className="menu-pages">
          
          {[USER_ROLE.ADMIN].includes(user.role) &&
            <a href="/new">Novo Prato</a>
          }

          <a onClick={handleSignOut}>Sair</a>
        </div>
      </div>

      <Footer/>
    </Container>
  )
}