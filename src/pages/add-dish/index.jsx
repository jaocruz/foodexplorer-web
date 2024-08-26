import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { IngredientButton } from "../../components/ingredient-button";

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

export function AddDish(){
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  async function handleNewDish() {
  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients));
    if (photo) formData.append("photo", photo);

    const response = await api.post("/dishs", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    if (response.status === 200) {
      const dishId = response.data.id;

      alert("Prato cadastrado com sucesso.");
      navigate(`/details/${dishId}`)
    }
  } catch (error) {
    console.error('Error adding dish:', error.response?.data || error.message);
    alert("Ocorreu um erro ao cadastrar o prato.");
  }
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
            <input
              type="file"
              onChange={e => setPhoto(e.target.files[0])}
            />

            <div className="photo-upload">
              <PiUploadSimple/>
              <h1>Selecione imagem</h1>
            </div>
          </Input>
          
          <Input
            title="Nome"
            placeholder="Ex.: Salada Ceasar"
            onChange={e => setName(e.target.value)}
          />

          <Input title="Categoria">
            <select onChange={e => setCategory(e.target.value)} value={category}>
              <option value="" disabled hidden>Escolha uma opção</option>
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
                ingredients.map((ingredient, index) => (
                  <IngredientButton
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))
              }

              <IngredientButton
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </Input>

          <Input
            title="Preço"
            placeholder="R$ 00,00"
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <div className="third-row">
          <Input title="Descrição">
            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </Input>
        </div>

        <div className="fourth-row">
          <Button onClick={handleNewDish} title="Salvar alterações"/>
        </div>
      </Form>
    </Container>

    <Footer/>
    </>
  )
}