import { Container, Brand, Form } from "./styles";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { PiHexagonFill } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";

import { useState } from "react";
import { Link } from "react-router-dom";

export function SignIn(){
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  };

  return (
    <Container>
      <Brand>
        <PiHexagonFill size={49}/>
        <h1>food explorer</h1>
      </Brand>

      <Form>
        <h1>Faça login</h1>

        <Input
          title="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}