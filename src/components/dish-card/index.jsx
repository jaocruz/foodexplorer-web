import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { Container } from "./styles";

import { PiHeartStraight, PiPencilSimpleLight  } from "react-icons/pi";

import { Button } from "../button";
import { Stepper } from "../stepper";

export function DishCard({data}){
  const { user } = useAuth();

  return (
    <Container>

      {[USER_ROLE.ADMIN].includes(user.role) && <Link to="/edit/:id"><PiPencilSimpleLight  size={28}/></Link>}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <a href="#"><PiHeartStraight size={24}/></a>}

      <section className="main-info">
        <img src="" alt="" />

        <h2>{data.name} ></h2>

        <p>{data.description}</p>

        <h3>R$ {data.price}</h3>

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