import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { Container } from "./styles";

import { PiHeartStraight, PiPencilSimpleLight, PiHeartStraightFill } from "react-icons/pi";

import { Button } from "../button";
import { Stepper } from "../stepper";

import dishPlaceholder from "/placeholder.png";

import { api } from "../../services/api.js";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function DishCard({data}){
  const { user, addToOrder } = useAuth();

  const [favoriteId, setFavoriteId] = useState(null)
  const [isFavorited, setIsFavorited] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const dishURL = data.photo ? `${api.defaults.baseURL}/files/${data.photo}` : dishPlaceholder;

  const navigate = useNavigate();

  useEffect(() => {
    async function handleFavorites() {
      const response = await api.get("/favorites");
      const favorites = response.data;

      const favorite = favorites.find(favorite => favorite.dish_id === data.id);

      setIsFavorited(!!favorite);
      setFavoriteId(favorite ? favorite.id : null);
    }

    handleFavorites();
  }, [data.id]);

  async function addFavorite() {
    await api.post(`/favorites`, {dish_id: data.id});
    setIsFavorited(true);
  }

  async function removeFavorite() {
    if(favoriteId) {
      await api.delete(`/favorites/${favoriteId}`);
      setIsFavorited(false);
    }
  }

  function handleDetails(){
    navigate(`/details/${data.id}`)
  };

  function handleEdit(){
    navigate(`/edit/${data.id}`)
  };

  function handleAddOrder() {
    addToOrder(data.id, quantity);
  }

  return (
    <Container>

      {[USER_ROLE.ADMIN].includes(user.role) &&
        <PiPencilSimpleLight size={28} onClick={handleEdit}/>
      }

      {[USER_ROLE.CUSTOMER].includes(user.role) &&
        (isFavorited ? (
          <PiHeartStraightFill size={24} onClick={removeFavorite}/>
        ) : (
          <PiHeartStraight size={24} onClick={addFavorite}/>
        ))
      }

      <section className="main-info">
        <img src={dishURL} alt={data.name} onClick={handleDetails}/>

        <h2 onClick={handleDetails}>{data.name} {">"}</h2>

        <p>{data.description}</p>

        <h3>R$ {data.price}</h3>

        {[USER_ROLE.CUSTOMER].includes(user.role) &&
          <section>
            <Stepper onChange={setQuantity}/>
            <Button title="incluir" onClick={handleAddOrder}/>
          </section>
        }
      </section>
    </Container>
  )
}