import { Container, Brand, Form } from "./styles";

import { PiHexagonFill } from "react-icons/pi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function SignUp(){
  return (
    <Container>
      <Brand>
        <PiHexagonFill size={49}/>
        <h1>food explorer</h1>
      </Brand>

      <Form>
        <h1>Crie sua conta</h1>

        <Input title="Seu nome" placeholder="Exemplo: Maria da Silva"/>
        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
        <Input title="Senha" placeholder="No mínimo 6 caracteres"/>

        <Button title="Criar conta"/>

        <a href="#">Já tenho uma conta</a>
      </Form>
    </Container>
  )
}