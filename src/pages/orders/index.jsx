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

import { SideMenu } from "../../components/side-menu";

export function Orders(){
  const { user } = useAuth();
  const [ordersList, setOrdersList] = useState([]);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

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

  function formatOrderDetails(details){
    let parsedDetails = details;

    if(typeof details === "string") {
      parsedDetails = JSON.parse(details)
    };

    return parsedDetails.map(dish => {
      return `${dish.quantity} x ${dish.name}`
    }).join(", ")
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
    navigate(`/payment/${orderId}`)
  };

  const filteredOrders = user.role === USER_ROLE.CUSTOMER ? ordersList.filter(order => order.user_id === user.id) : ordersList;

  return(
    <>
    <SideMenu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
    />
    
    <Header onOpenMenu={() => setMenuIsOpen(true)}/>

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

                {[USER_ROLE.CUSTOMER].includes(user.role) &&
                  <td className="costumer" onClick={() => handleShowOrder(order.id)}>
                    <section className="costumer-status">
                      <article className={`order-status ${order.status}`}/>
                      {order.status}
                    </section>
                  </td>
                }

                {[USER_ROLE.ADMIN].includes(user.role) &&
                  <td className="admin">
                    <div className="admin-select">
                      <article className={`order-status ${order.status}`}/>
                      <select name="status" id="status" value={order.status} onChange={(e) => handleStatus(e, order.id)}>
                        <option value="Pendente">Pendente</option>
                        <option value="Preparando">Preparando</option>
                        <option value="Entregue">Entregue</option>
                      </select>
                    </div>
                  </td>
                }
                  
                <td>0000{order.id}</td>

                <td>{formatOrderDetails(order.details)}</td>

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