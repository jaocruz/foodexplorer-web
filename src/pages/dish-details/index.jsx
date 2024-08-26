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
              <Button title="incluir ∙ R$ 25,00"/>
            </section>
          }

          {[USER_ROLE.ADMIN].includes(user.role) &&
            <section>
              <Link to="/edit/:id">
              <Button title="Editar prato"/>
              </Link>
            </section>
          }

        </div>
      </div>
      }

      {/* <div className="dish">
        <img src="/salada-ravanello.png" alt="" />

        <div className="dish-details">
          <h1>Salada Ravanello</h1>
          <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</span>

          <div className="ingredients">
            <IngredientTag title="alface"/>
            <IngredientTag title="cebola"/>
            <IngredientTag title="pão naan"/>
            <IngredientTag title="pepino"/>
            <IngredientTag title="rabanete"/>
            <IngredientTag title="tomate"/>
          </div>

          {[USER_ROLE.CUSTOMER].includes(user.role) &&
            <section>
              <Stepper />
              <Button title="incluir ∙ R$ 25,00"/>
            </section>
          }

          {[USER_ROLE.ADMIN].includes(user.role) &&
            <section>
              <Link to="/edit/:id">
              <Button title="Editar prato"/>
              </Link>
            </section>
          }

        </div>
      </div> */}
    </Container>

    <Footer />
    </>
  )
}