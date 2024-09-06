import { Container } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useNavigate } from "react-router-dom";

export function Orders(){
  const { user } = useAuth();
  const [ordersList, setOrdersList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get("/orders");
      setOrdersList(response.data);
    }

    loadOrders();
  }, []);

  function formDateTime(dateTimeString){
    return format(new Date(dateTimeString), "dd/MM 'às' HH:mm", { locale: ptBR });
  };

  function handleStatus(e, orderId){
    const newStatus = e.target.value;

    api.put(`/orders/${orderId}`, { status: newStatus })
    .then(() => {
      setOrdersList(ordersList.map(order => order.id === orderId ?
        {...order, status: newStatus } : order
      ))
    })
  };

  async function handleShowOrder(orderId){
    const order = await api.get(`/orders/${orderId}`);
    console.log(order.data);

    navigate(`/payment/${orderId}`)
  };

  const filteredOrders = user.role === USER_ROLE.CUSTOMER ? ordersList.filter(order => order.user_id === user.id) : ordersList;

  return(
    <>
    <Header/>

    <Container>
      <h1>Histórico de pedidos</h1>

      <table>
        <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
        </thead>

        <tbody>
          {
            filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  {[USER_ROLE.CUSTOMER].includes(user.role) &&
                    <section onClick={() => handleShowOrder(order.id)}>
                      <article className={`order-status ${order.status}`}/>
                      {order.status}
                    </section>
                  }
                    
                  {[USER_ROLE.ADMIN].includes(user.role) &&
                    <div className="admin-select">
                      <article className={`order-status ${order.status}`}/>
                      <select name="status" id="status" onChange={(e) => handleStatus(e, orderId)}>
                        <option value="Pendente">Pendente</option>
                        <option value="Preparando">Preparando</option>
                        <option value="Entregue">Entregue</option>
                      </select>
                    </div>
                  }
                </td>
                  
                <td>{order.id}</td>
                <td>{order.details}</td>
                <td>{formDateTime(order.created_at)}</td>
              </tr>
            ))
          }
        </tbody>     
      </table>
    </Container>

    <Footer/>
    </>
  )
}