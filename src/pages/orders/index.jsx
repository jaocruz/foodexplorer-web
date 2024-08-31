import { Container } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/user-roles";

export function Orders(){
  const { user } = useAuth();

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

        <tbody>
          <tr>
              <td>
                {[USER_ROLE.CUSTOMER].includes(user.role) &&
                  <section>
                    <article className="order-status pendente"/>Pendente
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
              
              <td>00000004</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
          </tr>
        </tbody>
        </table>
    </Container>

    <Footer/>
    </>
  )
}