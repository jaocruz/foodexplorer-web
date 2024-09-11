import { Container, Form } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { IngredientButton } from "../../components/ingredient-button";

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

import { api } from "../../services/api";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { SideMenu } from "../../components/side-menu";

export function EditDish(){
  const [data, setData] = useState([]);
  
  const params = useParams();

  const navigate = useNavigate();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleBack(){
    navigate(-1)
  }

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  useEffect(() => {
    api.get("/dishs")
    .then(response => {
      const ingredientsList = response.data[0]?.ingredients || [];
      const ingredientNames = ingredientsList.map(ingredient => ingredient.name)
      setIngredients(ingredientNames);
    })
    .catch(error => console.log("Erro ao buscar ingredientes: ", error))
  }, [])

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

  useEffect(() => {
    async function getDishInformations() {
      const response = await api.get(`/dishs/${params.id}`)
      setData(response.data);
      setName(response.data.name);
      setCategory(response.data.category);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setPhoto(response.data.photo);
      setIngredients(response.data.ingredients.map(ingredient => ingredient.name));
    }

    getDishInformations();
  }, [])

  async function handleEditDish() {
    try {
      const formData = new FormData();
  
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("ingredients", JSON.stringify(ingredients));
      if (photo) formData.append("photo", photo);
  
      const response = await api.put(`/dishs/${params.id}`, formData);
  
      if (response.status === 200) {
        alert("Prato atualizado com sucesso.");
        navigate(`/details/${params.id}`)
      }
    } catch (error) {
      console.error('Error updating dish:', error.response?.data || error.message);
      alert("Ocorreu um erro ao atualizar o prato.");
    }
  }

  async function handleDeleteDish() {
    const confirmDelete = window.confirm("Você realmente deseja excluir esse prato?")

    if(confirmDelete){
      await api.delete(`/dishs/${params.id}`);

      alert("Prato excluido com sucesso");
      navigate("/");
    }
  }

  return (
    <>
    <SideMenu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
    />

    <Header onOpenMenu={() => setMenuIsOpen(true)}/>

    <Container>
      <a onClick={handleBack}><PiCaretLeft/>voltar</a>

      <h1>Editar prato</h1>

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
            value={name}
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
                onClick={handleAddIngredient}
                onChange={e => setNewIngredient(e.target.value)}
              />
            </div>
          </Input>

          <Input
            title="Preço"
            placeholder="R$ 00,00"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <div className="third-row">
          <Input title="Descrição">
            <textarea
              value={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </Input>
        </div>

        <div className="fourth-row">
          <Button onClick={handleDeleteDish} title="Excluir prato"/>
          <Button onClick={handleEditDish} title="Salvar alterações"/>
        </div>
      </Form>
    </Container>

    <Footer/>
    </>
  )
}