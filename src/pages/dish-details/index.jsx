import { Container } from "./styles";

import { PiCaretLeft } from "react-icons/pi";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Button } from "../../components/button"
import { Stepper } from "../../components/stepper"
import { IngredientTag } from "../../components/ingredient-tag"

export function DishDetails(){
  return (
    <>
    <Header />

    <Container>
      <a href=""><PiCaretLeft/>voltar</a>

      <div className="dish">
        <img src="Mask group.png" alt="" />

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

          <section>
            <Stepper />
            <Button title="incluir ∙ R$ 25,00"/>
          </section>

        </div>
      </div>
    </Container>

    <Footer />
    </>
  )
}