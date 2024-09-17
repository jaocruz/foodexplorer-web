import { Container, Banner, Carousel, Gradient } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { DishCard } from "../../components/dish-card"

import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

import { SideMenu } from "../../components/side-menu";

const categories = {
  "Refeicao": "Refeições",
  "Sobremesa": "Sobremesas",
  "Bebida": "Bebidas"
}

const CarouselSection = ({ category, dishes, search }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const filteredDishes = dishes
  .filter(dish => dish.category === category)
  .filter(dish => dish.name.toLowerCase().includes(search.toLowerCase()));

  if(filteredDishes.length === 0) return null;

  const totalItems = filteredDishes.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);
  const translateXValue = -(currentIndex * (100 / itemsPerPage));

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
  }

  return(
    <Carousel>
      <h1>{categories[category]}</h1>

      <section>
        <Gradient>
          <div className={`left-gradient ${currentIndex > 0 ? 'visible' : 'hidden'}`}>
            <a onClick={handlePrev}><PiCaretLeft/></a>
          </div>
          
          <div className={`right-gradient ${currentIndex < maxIndex ? 'visible' : 'hidden'}`}>
            <a onClick={handleNext}><PiCaretRight/></a>
          </div>
        </Gradient>

        <div className="carousel-container" style={{ transform: `translateX(${translateXValue}%)`}}>
          {
            filteredDishes.map((dish, index) => (
              <DishCard
                key={dish.id}
                data={dish}
              />
            ))
          }
        </div>
        
      </section>
    </Carousel>
  )
}

export function Home(){
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
    <SideMenu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
    />
    
    <Header onSearch={handleSearch} onOpenMenu={() => setMenuIsOpen(true)}/>

    <Container>
      <Banner>
        <img src="Banner.png" alt="" />

        <img src="mobile-banner.png" alt="" />

        <div className="banner-text">
          <h1>Sabores inigualáveis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
        </div>
      </Banner>

      {
        Object.keys(categories).map(category => (
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