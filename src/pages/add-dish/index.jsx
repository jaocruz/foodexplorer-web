import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, Form } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { IngredientButton } from "../../components/ingredient-button";

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

export function AddDish(){

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }
  
  return (
    <>
    <Header/>

    <Container>
      <a onClick={handleBack}><PiCaretLeft/>voltar</a>

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
              <option selected disabled>Selecione a categoria</option>
              <option value="Refeicao">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Bebida">Bebida</option>
            </select>
          </Input>
        </div>

        <div className="second-row">
          <Input title="Ingredients">

            <div className="ingredients">
              {
                tags.map((tag, index) => (
                  <IngredientButton
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <IngredientButton
                isNew
                placeholder="Adicionar"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
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
          <Link to="/details/:id">
            <Button title="Salvar alterações"/>
          </Link>
        </div>
      </Form>
    </Container>

    <Footer/>
    </>
  )
}