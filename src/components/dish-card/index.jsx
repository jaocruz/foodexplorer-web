import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { Container } from "./styles";

import { PiHeartStraight, PiPencilSimpleLight  } from "react-icons/pi";

import { Button } from "../button";
import { Stepper } from "../stepper";

import dishPlaceholder from "/placeholder.png";

import { api } from "../../services/api.js";

import { useNavigate } from "react-router-dom";

export function DishCard({data}){
  const { user } = useAuth();

  const dishURL = data.photo ? `${api.defaults.baseURL}/files/${data.photo}` : dishPlaceholder;

  const navigate = useNavigate();

  function handleDetails(){
    navigate(`/details/${data.id}`)
  }

  function handleEdit(){
    navigate(`/edit/${data.id}`)
  }

  return (
    <Container>

      {[USER_ROLE.ADMIN].includes(user.role) && <PiPencilSimpleLight size={28} onClick={handleEdit}/>}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <PiHeartStraight size={24}/>}

      <section className="main-info">
        <img src={dishURL} alt={data.name} onClick={handleDetails}/>

        <h2 onClick={handleDetails}>{data.name} {">"}</h2>

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