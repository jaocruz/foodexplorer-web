import { Container } from "./styles";

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export function Orders(){
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
                <section>
                  <div className="order-status pendente"/>Pendente
                </section>
              </td>
              <td>00000004</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
          </tr>

          <tr>
              <td>
                <section>
                  <div className="order-status preparando"/>Preparando
                </section>
              </td>
              <td>00000003</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
          </tr>

          <tr>
              <td>
                <section>
                  <div className="order-status entregue"/>Entregue
                </section>
              </td>
              <td>00000002</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
          </tr>

          <tr>
              <td>
                <section>
                  <div className="order-status entregue"/>Entregue
                </section>
              </td>
              <td>00000001</td>
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