import { Container, Brand, Form } from "./styles";

import { PiHexagonFill } from "react-icons/pi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function SignIn(){
  return (
    <Container>
      <Brand>
        <PiHexagonFill size={49}/>
        <h1>food explorer</h1>
      </Brand>

      <Form>
        <h1>Faça login</h1>

        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
        <Input title="Senha" placeholder="No mínimo 6 caracteres"/>

        <Button title="Entrar"/>

        <a href="#">Criar uma conta</a>
      </Form>
    </Container>
  )
}