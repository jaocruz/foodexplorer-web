import { Container, DishSection, PaymentModal } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

import { PiPixLogo, PiCreditCard, PiReceipt, PiClock, PiCheckCircle, PiForkKnife } from "react-icons/pi";

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
          <div className="checkout-payment">
            <PiClock/>
            <h1>Aguardando pagamento no caixa</h1>
          </div>

          {/* <img src="/pix-qrcode.png" alt="" /> */}

          {/* <form>
            <Input
              title="Número do cartão"
              placeholder="0000 0000 0000 0000"
            />

            <div className="second-row">
              <Input
                title="Validade"
                placeholder="04/25"
              />

              <Input
                title="CVV"
                placeholder="000"
              />
            </div>

            <Button
              icon={PiReceipt}
              title="Finalizar pagamento"
            />
          </form> */}

          {/* <div className="aproved-payment">
            <PiCheckCircle/>
            <h1>Pagamento aprovado!</h1>
          </div> */}

          {/* <div className="delivered-order">
            <PiForkKnife/>
            <h1>Pedido entregue!</h1>
          </div> */}
        </div>
      </PaymentModal>
    </Container>

    <Footer/>
    </>
  )
}