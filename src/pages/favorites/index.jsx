import { Container } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Favorites(){
  const [favorite, setFavorite] = useState([]);

  const dishURL = `${api.defaults.baseURL}/files/`;

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
    <Header/>

    <Container>
      <h1>Meus favoritos</h1>

      <section>
        {
          favorite.map((favorite, index) => (
            <div className="favorite-dishes" key={index}>
              <img src={`${dishURL}${favorite.photo}`}/>

              <div className="dish-info">
                <h1>{favorite.name}</h1>
                <a>Remover dos favoritos</a>
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