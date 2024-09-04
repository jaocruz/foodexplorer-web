import { Container, DishSection, PaymentModal } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

import { PiPixLogo, PiCreditCard, PiReceipt, PiClock, PiCheckCircle, PiForkKnife } from "react-icons/pi";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { useLocation } from "react-router-dom";

export function Payment(){
  const { removeFromOrder } = useAuth();

  const location = useLocation();

  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const [isCreditOpen, setIsCreditOpen] = useState(false);
  const [isPaymentAproved, setIsPaymentAproved] = useState(false);

  const [creditCard, setCreditCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const [selectedPayment, setSelectedPayment] = useState(null);

  const dishURL = `${api.defaults.baseURL}/files/`;

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
    setOrders(savedOrders);
    calculateTotal(savedOrders);
  }, []);  

  function calculateTotal(orderList) {
    const totalAmount = orderList.reduce((sum, order) => {
      return sum + order.description.reduce((orderSum, dish) => {
        const price = parseFloat(dish.price.replace(",", "."));
        const quantity = parseFloat(dish.quantity);

        if(!isNaN(price) && !isNaN(quantity)) {
          return orderSum + (price * quantity);
        }
        
        return orderSum;
      }, 0)
    }, 0);

    setTotal(totalAmount)
  };

  async function handleRemoveOrder(orderId, dishId) {
    await removeFromOrder(orderId, dishId);

    const updatedOrders = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
    setOrders(updatedOrders);
    calculateTotal(updatedOrders);
  };

  function handlePix() {
    if (isPaymentAproved) return;

    if(selectedPayment === "credit") {
      setIsCreditOpen(false)
    };

    setIsQRCodeOpen(!isQRCodeOpen);
    setSelectedPayment(selectedPayment === "pix" ? null : "pix");
  };

  function handleCredit() {
    if (isPaymentAproved) return;

    if(selectedPayment === "pix") {
      setIsQRCodeOpen(false)
    };

    setIsCreditOpen(!isCreditOpen);
    setSelectedPayment(selectedPayment === "credit" ? null : "credit");
  };

  async function handlePayment() {
    if(!creditCard || !expiryDate || !verifyCode) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    const orderData = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
    
    const description = orderData[0].description.map(dish => ({
      name: dish.name,
      quantity: dish.quantity
    }));

    await api.post(`/orders`, { description });

    removeFromOrder(orderData[0].id);

    localStorage.removeItem("@foodexplorer:order");

    setIsCreditOpen(false);
    setIsPaymentAproved(true);
  };

  return(
    <>
    <Header/>

    <Container>
      <h1>Meu pedido</h1>

      <section>
        {orders.length > 0 && orders.map(order => (

          <div key={order.id} className="pedido">
            {order.description.map(dish => (
              <DishSection key={dish.id}>
                <img src={`${dishURL}${dish.photo}`} alt="" />

                <div className="dish-info">
                  <h2>{dish.quantity} x {dish.name}</h2>
                  <span>R$ {dish.price}</span>
                  <a onClick={() => handleRemoveOrder(order.id, dish.id)}>Excluir</a>
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
                onChange={e => setCreditCard(e.target.value)}
              />

              <div className="second-row">
                <Input
                  title="Validade"
                  placeholder="04/25"
                  onChange={e => setExpiryDate(e.target.value)}
                />

                <Input
                  title="CVV"
                  placeholder="000"
                  onChange={e => setVerifyCode(e.target.value)}
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