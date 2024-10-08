import { Container } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { SideMenu } from "../../components/side-menu";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Favorites(){
  const [favorite, setFavorite] = useState([]);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const dishURL = `${api.defaults.baseURL}/files/`;

  async function handleDelete(id){
    await api.delete(`/favorites/${id}`)
    setFavorite(favorite.filter(favorite => favorite.id !== id));
  };

  useEffect(() => {
    async function loadFavorites() {
      try {
        const response = await api.get("/favorites");
        setFavorite(response.data);
      }

      catch(error) {
        console.error("Não foi possivel carregar favoritos:", error);
      }
    }

    loadFavorites();
  }, []);

  return(
    <>
    <SideMenu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
    />
    
    <Header onOpenMenu={() => setMenuIsOpen(true)}/>

    <Container>
      <h1>Meus favoritos</h1>

      <section>
        {
          favorite.map((favorite, index) => (
            <div className="favorite-dishes" key={index}>
              <img src={`${dishURL}${favorite.photo}`}/>

              <div className="dish-info">
                <h1>{favorite.name}</h1>
                <a onClick={() => handleDelete(favorite.id)}>Remover dos favoritos</a>
              </div>
            </div>
          ))
        }
      </section>
    </Container>

    <Footer/>
    </>
  )
}