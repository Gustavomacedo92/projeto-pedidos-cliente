import React, { useState, useRef } from "react";
import Logo1 from "../../assets1/burger1.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";

import Butoon from "../../components/Buttonn"
import H1 from "../../components/title"
import {
  Container,
  Image,
  ContainerIntes,
  InputLabel,
  Input,
} from "./styles"

const App = () => {

  const [users, setPedido] = useState([]);
  const navigate = useNavigate();

  const inputname = useRef();
  const inputpedido = useRef();


  async function addNovoPedido() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputname.current.value,
      order: inputpedido.current.value
    })

    setPedido([...users, newUser]);

    navigate("/usuarios")

  }

  return (

    <Container>

      <Image alt="logo" src={Logo1}></Image>
      <H1>Faça seu pedido!</H1>
      <ContainerIntes>




        <InputLabel>Pedido</InputLabel>

        <Input ref={inputpedido} placeholder="order"></Input>

        <InputLabel>Nome do Cliente</InputLabel>

        <Input ref={inputname} placeholder="name"></Input>

        <Butoon onClick={addNovoPedido}>Novo Pedido</Butoon>


      </ContainerIntes>
    </Container>

  )

}

export default App