import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { Container, Brand } from "./styles";

import { Button } from "../button";
import { Input } from "../input";

import { PiSignOut, PiHexagonFill, PiMagnifyingGlass, PiReceipt  } from "react-icons/pi";

import { useEffect, useState } from "react";

export function Header({ onSearch }){
  const { signOut, user, getOrder } = useAuth();

  const [search, setSearch] = useState("");
  const [orderCount, setOrderCount] = useState(0);

  const navigate = useNavigate();

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

  const handleSearch = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  };

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

        {[USER_ROLE.CUSTOMER].includes(user.role) && <a href="/favorites"><h2>Meus favoritos</h2></a> }

        <a href="/orders"><h2>Histórico de pedidos</h2></a>

        {[USER_ROLE.ADMIN].includes(user.role) &&
          <Link to="/new">
            <Button title="Novo prato"/>
          </Link>
        }

        {[USER_ROLE.CUSTOMER].includes(user.role) &&
          <Link to="/payment">
            <Button icon={PiReceipt} title={`Pedidos (${orderCount})`} />
          </Link>
        }

        <a onClick={handleSignOut}><PiSignOut size={32}/></a>
      </main>
    </Container>
  )
}