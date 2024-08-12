import { Container, Banner } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

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
    </Container>

    <Footer/>
    </>
  )
}