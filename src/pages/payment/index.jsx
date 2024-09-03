import { Container, DishSection, PaymentModal } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

import { PiPixLogo, PiCreditCard, PiReceipt, PiClock, PiCheckCircle, PiForkKnife } from "react-icons/pi";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Payment(){
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const [isCreditOpen, setIsCreditOpen] = useState(false);
  const [isPaymentAproved, setIsPaymentAproved] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const dishURL = `${api.defaults.baseURL}/files/`;

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
    setOrders(savedOrders);
    
    console.log(savedOrders);

    const totalAmount = savedOrders.reduce((sum, order) =>
      sum + order.description.reduce((orderSum, dish) =>
        orderSum + (dish.price * dish.quantity), 0
      ), 0
    );
    setTotal(totalAmount);
  }, []);

  function handlePix() {
    if (isPaymentAproved) return;

    if(selectedPayment === "credit") {
      setIsCreditOpen(false)
    };

    setIsQRCodeOpen(!isQRCodeOpen);
    setSelectedPayment(selectedPayment === "pix" ? null : "pix");
  }

  function handleCredit() {
    if (isPaymentAproved) return;

    if(selectedPayment === "pix") {
      setIsQRCodeOpen(false)
    };

    setIsCreditOpen(!isCreditOpen);
    setSelectedPayment(selectedPayment === "credit" ? null : "credit");
  }

  function handlePayment() {
    setIsCreditOpen(false);
    setIsPaymentAproved(true);
  }

  return(
    <>
    <Header/>

    <Container>
      <h1>Meu pedido</h1>

      <section>
        {orders.length > 0 && orders.map(order => (

          <div key={order.id} className="pedido">
            {order.description.map(dish => (
              <DishSection key={dish.dishId}>
                <img src={`${dishURL}${dish.photo}`} alt="" />

                <div className="dish-info">
                  <h2>{dish.quantity} x {dish.name}</h2>
                  <span>R$ {dish.price}</span>
                  <a href="#">Excluir</a>
                </div>
              </DishSection>
            ))}
          </div>

          ))
        }

        <h2 className="total">Total: R$ {total.toFixed(2)}</h2>
      </section>

      <h1>Pagamento</h1>

      <PaymentModal>
        <div className="payment-method">
          <div className={`pix ${selectedPayment === "pix" ? "selected" : ""}`} onClick={handlePix}>
            <PiPixLogo/>
            <h1>PIX</h1>
          </div>

          <div className={`credit ${selectedPayment === "credit" ? "selected" : ""}`} onClick={handleCredit}>
            <PiCreditCard/>
            <h1>Crédito</h1>
          </div>
        </div>

        <div className="payment-info">
          {!isQRCodeOpen && !isCreditOpen && !isPaymentAproved && (
            <div className="checkout-payment">
              <PiClock/>
              <h1>Aguardando pagamento no caixa</h1>
            </div>
          )}

          {isQRCodeOpen && (
            <img src="/pix-qrcode.png" alt="" />
          )} 

          {isCreditOpen && (
            <form>
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
                onClick={handlePayment}
              />
            </form>
          )}

          {isPaymentAproved && (
            <div className="aproved-payment">
              <PiCheckCircle/>
              <h1>Pagamento aprovado!</h1>
            </div>
          )}

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