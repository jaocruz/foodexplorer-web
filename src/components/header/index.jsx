import { Container, Brand } from "./styles";

import { Input } from "../input";
import { Button } from "../button";

import { PiSignOut, PiHexagonFill, PiMagnifyingGlass, PiReceipt, PiList } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Header({ onSearch, onOpenMenu }){
  const { signOut, user, getOrder } = useAuth();

  const [search, setSearch] = useState("");
  const [orderCount, setOrderCount] = useState(0);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  };

  function handleSignOut() {
    navigate("/")
    signOut();
  };

  useEffect(() => {
    const updateOrderCount = () => {
      const order = getOrder() || [];
      const count = order.reduce((total, item) => {
        return total + item.description.reduce((subTotal, dish) => {
          return subTotal + (typeof dish.quantity === "number" ? dish.quantity : 0);
        }, 0)
      }, 0);

      setOrderCount(count);
    };

    updateOrderCount();
  }, [getOrder]);

  return (
    <Container>
      <main>
        <button className="menu-button" onClick={onOpenMenu}><PiList size={32}/></button>

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

        {[USER_ROLE.CUSTOMER].includes(user.role) && <a href="/favorites"><h2>Meus favoritos</h2></a> }

        <a href="/orders"><h2>Histórico de pedidos</h2></a>

        {[USER_ROLE.ADMIN].includes(user.role) &&
          <Link to="/new">
            <Button title="Novo prato"/>
          </Link>
        }

        {[USER_ROLE.CUSTOMER].includes(user.role) && 
          <Link to="/payment">
            <div className="mobile-counter">{orderCount}</div>
            <Button icon={PiReceipt} title={`Pedidos (${orderCount})`} />
          </Link>
        }

        <a onClick={handleSignOut}><PiSignOut size={32}/></a>
      </main>
    </Container>
  )
}