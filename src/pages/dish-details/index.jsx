import { Container } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { SideMenu } from "../../components/side-menu";

import { Button } from "../../components/button";
import { Stepper } from "../../components/stepper";
import { IngredientTag } from "../../components/ingredient-tag";

import dishPlaceholder from "/placeholder.png";

import { PiCaretLeft } from "react-icons/pi";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function DishDetails(){
  const { user, addToOrder } = useAuth();

  const params = useParams();

  const [data, setData] = useState("");

  const [quantity, setQuantity] = useState(1);
  
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const dishURL = data.photo ? `${api.defaults.baseURL}/files/${data.photo}` : dishPlaceholder;
  
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  };

  function handleEdit(){
    navigate(`/edit/${data.id}`)
  };

  function handleAddOrder(){
    addToOrder(data.id, quantity)
  };

  useEffect(() => {
    async function fetchDishs(){
      const response = await api.get(`/dishs/${params.id}`)
      setData(response.data);
    }

    fetchDishs()
  }, []);

  return (
    <>
    <SideMenu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
    />

    <Header onOpenMenu={() => setMenuIsOpen(true)}/>

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
                <Stepper onChange={setQuantity}/>
                <Button
                  title={`incluir ∙ R$ ${data.price}`}
                  onClick={handleAddOrder}
                />
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