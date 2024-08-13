import { Container, Form } from "./styles";

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { IngredientButton } from "../../components/ingredient-button";

export function AddDish(){
  return (
    <>
    <Header/>

    <Container>
      <a href=""><PiCaretLeft/>voltar</a>

      <h1>Adicionar prato</h1>

      <Form>
        <div className="first-row">
          <Input title="Imagem do prato">
            <input type="file" />

            <div className="photo-upload">
              <PiUploadSimple/>
              <h1>Selecione imagem</h1>
            </div>
          </Input>
          
          <Input title="Nome" placeholder="Ex.: Salada Ceasar"/>

          <Input title="Categoria">
            <select>
              <option selected disabled>- - - Selecione a categoria - - -</option>
              <option value="Refeicao">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Bebida">Bebida</option>
            </select>
          </Input>
        </div>

        <div className="second-row">
          <Input title="Ingredients">
            <div className="ingredients">
              <IngredientButton value="Pão Naan"/>
              <IngredientButton isNew placeholder="Adicionar"/>
            </div>
          </Input>


          <Input title="Preço" placeholder="R$ 00,00"/>
        </div>

        <div className="third-row">
          <Input title="Descrição">
            <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
          </Input>
        </div>

        <div className="fourth-row">
          <Button title="Salvar alterações"/>
        </div>
      </Form>
    </Container>

    <Footer/>
    </>
  )
}