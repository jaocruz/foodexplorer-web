import { Container, Banner, Carousel } from "./styles";

import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { DishCard } from "../../components/dish-card"

export function Home(){
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

      <Carousel>
        <h1>Refeições</h1>

        <section>
          <div className="gradients">
            <div className="left-gradient">
              <a href="#"><PiCaretLeft/></a>
            </div>

            <div className="right-gradient">
              <a href="#"><PiCaretRight/></a>
            </div>
          </div>

          <DishCard/>
        </section>
      </Carousel>

      <Carousel>
        <h1>Sobremesas</h1>

        <section>
          <div className="gradients">
            <div className="left-gradient">
              <a href="#"><PiCaretLeft/></a>
            </div>

            <div className="right-gradient">
              <a href="#"><PiCaretRight/></a>
            </div>
          </div>

          <DishCard/>
        </section>
      </Carousel>

      <Carousel>
        <h1>Bebidas</h1>

        <section>
          <div className="gradients">
            <div className="left-gradient">
              <a href="#"><PiCaretLeft/></a>
            </div>

            <div className="right-gradient">
              <a href="#"><PiCaretRight/></a>
            </div>
          </div>

          <DishCard/>
        </section>
      </Carousel>
    </Container>

    <Footer/>
    </>
  )
}