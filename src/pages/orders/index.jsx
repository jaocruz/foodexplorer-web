import { Container } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Orders(){
  const { user } = useAuth();
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get("/orders");
      setOrdersList(response.data);
    }

    loadOrders();
  }, []);

  function formDateTime(dateTimeString){
    return format(new Date(dateTimeString), "dd/MM 'às' HH:mm", { locale: ptBR });
  }

  function handleStatus(e){
    const status = e.target.value;
    const statusIndicator = document.getElementById("status-indicator");

    statusIndicator.classList.remove("pendente", "preparando", "entregue");

    statusIndicator.classList.add(status);
  }

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

        {
          ordersList.map((order) => (
            <tbody>
              <tr key={order.id}>
                  <td>
                    {[USER_ROLE.CUSTOMER].includes(user.role) &&
                      <section>
                        <article className={`order-status ${order.status}`}/>
                        {order.status}
                      </section>
                    }
                    
                    {[USER_ROLE.ADMIN].includes(user.role) &&
                      <div className="admin-select">
                        <article className="order-status" id="status-indicator"/>
                        <select name="status" id="status" onChange={handleStatus}>
                          <option value="pendente">Pendente</option>
                          <option value="preparando">Preparando</option>
                          <option value="entregue">Entregue</option>
                        </select>
                      </div>
                    }
                  </td>
                  
                  <td>{order.id}</td>
                  <td>{order.details}</td>
                  <td>{formDateTime(order.created_at)}</td>
              </tr>
            </tbody>
          ))
        }

        
        </table>
    </Container>

    <Footer/>
    </>
  )
}