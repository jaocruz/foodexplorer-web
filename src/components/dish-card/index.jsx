import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { Container } from "./styles";

import { PiHeartStraight, PiPencilSimpleLight  } from "react-icons/pi";

import { Button } from "../button";
import { Stepper } from "../stepper";

export function DishCard(){
  const { user } = useAuth();

  return (
    <Container>

      {[USER_ROLE.ADMIN].includes(user.role) && <Link to="/edit/:id"><PiPencilSimpleLight  size={28}/></Link>}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <a href="#"><PiHeartStraight size={24}/></a>}

      <section className="main-info">
        <Link to="/details/:id">
          <img src="/public/Mask group-1.png" alt="" />

          <h2>Torradas de Parma</h2>

          <p>
            Presunto de parma e rúcula em um pão com fermentação natural.
          </p>

          <h3>R$ 25,97</h3>
        </Link>

        {[USER_ROLE.CUSTOMER].includes(user.role) &&
          <section>
            <Stepper />
            <Button title="incluir"/>
          </section>
        }
      </section>
    </Container>
  )
}