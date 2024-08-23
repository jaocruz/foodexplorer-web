import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Brand, Form } from "./styles";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { PiHexagonFill } from "react-icons/pi";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password})

    .then(() => {
      alert("Usuário cadastrado com sucesso.")
      navigate("/");
    })

    .catch(error => {
      if(error.response){
        alert(error.repsonse.data.message);
      }

      else{
        alert("Cadastro não realizado, tente novamente.")
      }
    })
  }

  return (
    <Container>
      <Brand>
        <PiHexagonFill size={49}/>
        <h1>food explorer</h1>
      </Brand>

      <Form>
        <h1>Crie sua conta</h1>

        <Input 
          title="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          onChange={e => setName(e.target.value)}
        />

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

        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}