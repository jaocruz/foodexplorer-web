import { Container } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export function Favorites(){
  return(
    <>
    <Header/>

    <Container>
      <h1>Meus favoritos</h1>

      <section>
        <div className="favorite-dishes">
          <img src="/macarons.png" alt="" />

          <div className="dish-info">
            <h1>Macarons</h1>
            <a>Remover dos favoritos</a>
          </div>
        </div>

        <div className="favorite-dishes">
          <img src="/macarons.png" alt="" />

          <div className="dish-info">
            <h1>Macarons</h1>
            <a>Remover dos favoritos</a>
          </div>
        </div>

        <div className="favorite-dishes">
          <img src="/macarons.png" alt="" />

          <div className="dish-info">
            <h1>Macarons</h1>
            <a>Remover dos favoritos</a>
          </div>
        </div>

        <div className="favorite-dishes">
          <img src="/macarons.png" alt="" />

          <div className="dish-info">
            <h1>Macarons</h1>
            <a>Remover dos favoritos</a>
          </div>
        </div>

        <div className="favorite-dishes">
          <img src="/macarons.png" alt="" />

          <div className="dish-info">
            <h1>Macarons</h1>
            <a>Remover dos favoritos</a>
          </div>
        </div>

        <div className="favorite-dishes">
          <img src="/macarons.png" alt="" />

          <div className="dish-info">
            <h1>Macarons</h1>
            <a>Remover dos favoritos</a>
          </div>
        </div>
        
        <div className="favorite-dishes">
          <img src="/macarons.png" alt="" />

          <div className="dish-info">
            <h1>Macarons</h1>
            <a>Remover dos favoritos</a>
          </div>
        </div>

        <div className="favorite-dishes">
          <img src="/macarons.png" alt="" />

          <div className="dish-info">
            <h1>Macarons</h1>
            <a>Remover dos favoritos</a>
          </div>
        </div>
      </section>
    </Container>

    <Footer/>
    </>
  )
}