import { Container, DishSection, PaymentModal } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

import { PiPixLogo, PiCreditCard, PiReceipt, PiClock, PiCheckCircle, PiForkKnife } from "react-icons/pi";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { useParams } from "react-router-dom";

export function Payment(){
  const { removeFromOrder } = useAuth();

  const { orderId } = useParams();

  const [order, setOrder] = useState(null);
  const [total, setTotal] = useState(0);

  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const [isCreditOpen, setIsCreditOpen] = useState(false);
  const [isAprovedOpen, setIsAprovedOpen] = useState(false);
  const [isPendingModalOpen, setIsPendingModalOpen] = useState(true);

  const [creditCard, setCreditCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const [selectedPayment, setSelectedPayment] = useState(null);

  const dishURL = `${api.defaults.baseURL}/files/`;

  useEffect(() => {
    async function loadOrders() {

      try {
        let backendOrder = null;
        let localStorageOrder = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
  
        if(orderId) {
          const response = await api.get(`/orders/${orderId}`);

          if(response.data && response.data.order) {
            const dishDetails = typeof response.data.order.details === "string"
              ? JSON.parse(response.data.order.details)
              : response.data.order.details;
  
            backendOrder = {
              ...response.data.order,
              details: dishDetails
            };
  
            setOrder(backendOrder);
            calculateTotal([{ description: dishDetails }]);
  
            if (response.data.order.status === "Preparando") {
              setIsAprovedOpen(true);
            }
          }
          
          else {
            setOrder([]);
          }
        }
        
        else {

          if (localStorageOrder.length > 0) {
            console.log("LocalStorage Order:", localStorageOrder);
            setOrder(localStorageOrder);
            calculateTotal(localStorageOrder);
          }
        }

        if (!backendOrder && localStorageOrder.length > 0) {
          calculateTotal(localStorageOrder);
        }
      }
      
      catch (error) {
        console.error("Error loading orders:", error);
      }
    }
  
    loadOrders();
  }, [orderId]);
  
  function calculateTotal(orderList) {
    if(!Array.isArray(orderList)) {
      console.error("Invalid orderList format");
      return;
    }
  
    const totalAmount = orderList.reduce((sum, order) => {
      if(typeof order !== 'object' || !Array.isArray(order.description)) {
        console.warn("Invalid order format:", order);
        return sum;
      }
  
      return sum + order.description.reduce((orderSum, dish) => {
        if(typeof dish !== 'object' || !dish.price || !dish.quantity) {
          console.warn("Invalid dish format:", dish);
          return orderSum;
        }
  
        const price = parseFloat(dish.price.replace(",", "."));
        const quantity = parseFloat(dish.quantity);
  
        if(!isNaN(price) && !isNaN(quantity)) {
          return orderSum + (price * quantity);
        }
        
        else {
          console.warn("Invalid price or quantity:", dish);
          return orderSum;
        }

      }, 0);
    }, 0);
  
    setTotal(totalAmount);
  };
  
  async function handleRemoveOrder(orderId, dishId) {
    await removeFromOrder(orderId, dishId);

    const updatedOrders = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
    setOrder(updatedOrders);
    calculateTotal(updatedOrders);
  };

  function handlePaymentMethodSelection(method) {
    if(isAprovedOpen) return;

    if(selectedPayment === method) {
      setIsQRCodeOpen(false);
      setIsCreditOpen(false);

      setSelectedPayment(null);
      setIsPendingModalOpen(true);
    }

    else {
      if(method === "pix") {
        setIsQRCodeOpen(true);
        setIsCreditOpen(false);
      }

      else if(method === "credit") {
        setIsQRCodeOpen(false);
        setIsCreditOpen(true);
      }

      setIsPendingModalOpen(false);
      setSelectedPayment(method);
    }
  }

  function handlePix() {
    handlePaymentMethodSelection("pix");
  };

  function handleCredit() {
    handlePaymentMethodSelection("credit");
  };

  async function handlePayment() {
    if(!creditCard || !expiryDate || !verifyCode) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    const orderData = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
    
    const description = orderData[0].description.map(dish => ({
      name: dish.name,
      photo: dish.photo,
      price: dish.price,
      quantity: dish.quantity
    }));

    await api.post(`/orders`, { description });

    removeFromOrder(orderData[0].id);

    localStorage.removeItem("@foodexplorer:order");

    setIsCreditOpen(false);
    setIsAprovedOpen(true);

    setSelectedPayment(null);
  };

  const isOrderDisabled = order && (order.status === "Preparando" || order.status === "Entregue")

  const showPendindModal = !isOrderDisabled;

  return(
    <>
    <Header/>

    <Container>
      <h1>Meu pedido</h1>

      {
        orderId ? (
          <section>

            {order && (
              <div className="pedido">
                {Array.isArray(order.details) && order.details.map((dish, index) => (
                  <DishSection key={index}>
                    <img src={`${dishURL}${dish.photo}`} alt="" />

                    <div className="dish-info">
                      <h2>{dish.quantity} x {dish.name}</h2>
                      <span>R$ {dish.price}</span>
                    </div>
                  </DishSection>
                ))}
              </div>
            )}

            <h2 className="total">Total: R$ {total.toFixed(2)}</h2>
          </section>
        ) : (
          <section>
            {Array.isArray(order) && order.length > 0 && order.map(order => (

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
        )
      }

      <h1>Pagamento</h1>

      <PaymentModal>
        <div className="payment-method">
          <div className={`pix ${selectedPayment === "pix" ? "selected" : ""}`} onClick={!isOrderDisabled && !isAprovedOpen ? handlePix : undefined}>
            <PiPixLogo/>
            <h1>PIX</h1>
          </div>

          <div className={`credit ${selectedPayment === "credit" ? "selected" : ""}`} onClick={!isOrderDisabled && !isAprovedOpen ? handleCredit : undefined}>
            <PiCreditCard/>
            <h1>Crédito</h1>
          </div>
        </div>

        <div className="payment-info">
          {
            showPendindModal && isPendingModalOpen && (
              <div className="checkout-payment">
                <PiClock/>
                <h1>Aguardando pagamento no caixa</h1>
              </div>
            )
          }

          {isQRCodeOpen && !isCreditOpen && !isPendingModalOpen && (
            <img src="/pix-qrcode.png" alt="" />
          )} 

          {isCreditOpen && !isQRCodeOpen && !isPendingModalOpen && (
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

          {
            (order && order.status === "Preparando" || isAprovedOpen) && (
              <div className="aproved-payment">
                <PiCheckCircle/>
                <h1>Pagamento aprovado!</h1>
              </div>
            )
          }

          {
            order && order.status === "Entregue" && (
              <div className="delivered-order">
                <PiForkKnife/>
                <h1>Pedido entregue!</h1>
              </div>
            )
          }
        </div>
      </PaymentModal>
    </Container>

    <Footer/>
    </>
  )
}