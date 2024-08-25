import { Container, Banner, Carousel, Gradient } from "./styles";

import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { DishCard } from "../../components/dish-card"

import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function Home(){
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadDishs(){
      const response = await api.get("/dishs")
      setData(response.data);
    }

    loadDishs()
  }, []);

  const filteredDishes = (category) => data.filter(dish => dish.category === category);

  return (
    <>
    <Header/>

    <Container>
      <Banner>
        <img src="Banner.png" alt="" />

        <div className="banner-text">
          <h1>Sabores inigualáveis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
        </div>
      </Banner>

      {
       filteredDishes("Refeicao").length > 0 && (
        <Carousel>
          <h1>Refeições</h1>

          <section>
            {/* <Gradient>
              <div className="left-gradient">
                <a href="#"><PiCaretLeft/></a>
              </div>

              <div className="right-gradient">
                <a href="#"><PiCaretRight/></a>
              </div>
            </Gradient> */}

            {
              data.filter(dish => dish.category === "Refeicao").map(dish => (
                <DishCard
                  key={dish.id}
                  data={dish}
                />
              ))
            }
          </section>
        </Carousel>
      )}

      {
        filteredDishes("Sobremesa").length > 0 && (
        <Carousel>
          <h1>Sobremesas</h1>

          <section>
            {/* <Gradient>
              <div className="left-gradient">
                <a href="#"><PiCaretLeft/></a>
              </div>

              <div className="right-gradient">
                <a href="#"><PiCaretRight/></a>
              </div>
            </Gradient> */}

            {
              data.filter(dish => dish.category === "Sobremesa").map(dish => (
                <DishCard
                  key={dish.id}
                  data={dish}
                />
              ))
            }
          </section>
        </Carousel>
      )}

      {
        filteredDishes("Bebida").length > 0 && (
        <Carousel>
          <h1>Bebidas</h1>

          <section>
            {/* <Gradient>
              <div className="left-gradient">
                <a href="#"><PiCaretLeft/></a>
              </div>

              <div className="right-gradient">
                <a href="#"><PiCaretRight/></a>
              </div>
            </Gradient> */}

            {
              data.filter(dish => dish.category === "Bebida").map(dish => (
                <DishCard
                  key={dish.id}
                  data={dish}
                />
              ))
            }
          </section>
        </Carousel>
      )}
    </Container>

    <Footer/>
    </>
  )
}