import { Container, Banner, Carousel, Gradient } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { DishCard } from "../../components/dish-card"

import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

const categories = ["Refeicao", "Sobremesa", "Bebida"];

const CarouselSection = ({ category, dishes, search }) => {
  const filteredDishes = dishes
  .filter(dish => dish.category === category)
  .filter(dish => dish.name.toLowerCase().includes(search.toLowerCase()));

  if(filteredDishes.length === 0) return null;

  return(
    <Carousel>
      <h1>{category}</h1>

      <section>
        {
          filteredDishes.map(dish => (
            <DishCard
              key={dish.id}
              data={dish}
            />
          ))
        }
      </section>
    </Carousel>
  )
}

export function Home(){
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadDishes = async() => {
      try {
        const response = await api.get("/dishs");
        setDishes(response.data);
      }

      catch(error) {
        console.error("Não foi possivel carregar os pratos:", error);
      }
    }

    loadDishes();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  }

  return (
    <>
    <Header onSearch={handleSearch}/>

    <Container>
      <Banner>
        <img src="Banner.png" alt="" />

        <div className="banner-text">
          <h1>Sabores inigualáveis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
        </div>
      </Banner>

      {
        categories.map(category => (
          <CarouselSection
            key={category}
            category={category}
            dishes={dishes}
            search={search}
          />
        ))
      }

      {
        dishes.length === 0 && <p>Nenhum prato foi encontrado.</p>
      }

    </Container>

    <Footer/>
    </>
  )
}