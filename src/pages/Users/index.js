import React, { useState, useEffect,} from "react";
import Logo2 from "../../assets1/burger2.png"
import Lixeira from "../../assets1/lixeira.svg"
import axios from "axios"
import { useNavigate } from "react-router-dom";

import Butoon from "../../components/Buttonn"
import H1 from "../../components/title"
import {
  Container,
  Image,
  ContainerIntes,
  Pedidos,
} from "./styles"

const Users = () => {

  const [users, setPedido] = useState([]);
  const navigate = useNavigate()
 

  useEffect(() => {
    async function fetchUsers() {

      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setPedido(newUsers);
    }

    fetchUsers()
  }, [])


  async function deletePedido(userId) {
    await axios.delete(` http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId);

    setPedido(newUsers)

  }

  function goBackPage(){
    navigate("/");
  }

  return (

    <Container>

      <Image alt="logo" src={Logo2}></Image>
      <H1>Pedidos</H1>
      
      <ContainerIntes>
 
        <ul>
          
          {
            users.map((user) => (
              <Pedidos key={user.id}>
                <div>
                  <p>{user.name}</p>,<p>{user.order}</p>
                </div>
                <Butoon onClick={() => deletePedido(user.id)}><img alt="lixeira" src={Lixeira} /></Butoon>
              </Pedidos>
            ))
          }
        </ul>
<Butoon isBack={true} onClick={goBackPage}>Voltar</Butoon>
      </ContainerIntes>
    </Container>

  )

}

export default Users