import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { Container } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Button } from "../../components/button"
import { Stepper } from "../../components/stepper"
import { IngredientTag } from "../../components/ingredient-tag"

import { PiCaretLeft } from "react-icons/pi";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import dishPlaceholder from "/placeholder.png";

export function DishDetails(){
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  function handleEdit(){
    navigate(`/edit/${data.id}`)
  }

  const [data, setData] = useState("");

  const params = useParams();

  useEffect(() => {
    async function fetchDishs(){
      const response = await api.get(`/dishs/${params.id}`)
      setData(response.data);
    }

    fetchDishs()
  }, []);

  const dishURL = data.photo ? `${api.defaults.baseURL}/files/${data.photo}` : dishPlaceholder;

  return (
    <>
    <Header />

    <Container>
      <a onClick={handleBack}><PiCaretLeft/>voltar</a>

      {
        data &&

        <div className="dish">
        <img src={dishURL} alt={data.name} />

        <div className="dish-details">
          <h1>{data.name}</h1>
          <span>{data.description}</span>

          <div className="ingredients">
            {data.ingredients.map((ingredient) => (
              <IngredientTag
                key={ingredient.id}
                title={ingredient.name}
              />
            ))}
          </div>

          {[USER_ROLE.CUSTOMER].includes(user.role) &&
            <section>
              <Stepper />
              <Button title={`incluir ∙ R$ ${data.price}`}/>
            </section>
          }

          {[USER_ROLE.ADMIN].includes(user.role) &&
            <section className="admin-button">
              <Button onClick={handleEdit} title="Editar prato"/>
            </section>
          }

        </div>
      </div>
      }
    </Container>

    <Footer />
    </>
  )
}