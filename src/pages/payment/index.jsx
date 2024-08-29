import { Container, DishSection, PaymentModal } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

import { PiPixLogo, PiCreditCard } from "react-icons/pi";

export function Payment(){
  return(
    <>
    <Header/>

    <Container>
      <h1>Meu pedido</h1>

      <section>
        <div className="pedido">
          <DishSection>
            <img src="/public/bolo-de-damasco.png" alt="" />
            
            <div className="dish-info">
              <h2>1 x Bolo de Damasco</h2>
              <span>R$ 25,97</span>
              <a>Excluir</a>
            </div>
          </DishSection>

          <DishSection>
            <img src="/public/bolo-de-damasco.png" alt="" />
            
            <div className="dish-info">
              <h2>1 x Bolo de Damasco</h2>
              <span>R$ 25,97</span>
              <a>Excluir</a>
            </div>
          </DishSection>

          <DishSection>
            <img src="/public/bolo-de-damasco.png" alt="" />
            
            <div className="dish-info">
              <h2>1 x Bolo de Damasco</h2>
              <span>R$ 25,97</span>
              <a>Excluir</a>
            </div>
          </DishSection>
        </div>

        <h2 className="total">Total: R$ 103,88</h2>
      </section>

      <h1>Pagamento</h1>

      <PaymentModal>
        <div className="payment-method">
          <div className="pix">
            <PiPixLogo/>
            <h1>PIX</h1>
          </div>

          <div className="credit">
            <PiCreditCard/>
            <h1>Crédito</h1>
          </div>
        </div>

        <div className="payment-info">
          <img src="/pix-qrcode.png" alt="" />
        </div>
      </PaymentModal>
    </Container>

    <Footer/>
    </>
  )
}