import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

import { v4 as uuidv4 } from "uuid";

export const AuthContext = createContext({});

function AuthProvider({ children }){

  const [data, setData] = useState({});
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const loadData = () => {
      const user = localStorage.getItem("@foodexplorer:user");
      const token = localStorage.getItem("@foodexplorer:token");
      const saveOrder = localStorage.getItem("@foodexplorer:order");

      if(token && user) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setData({ token, user: JSON.parse(user) });
      }
  
      if(saveOrder) {
        setOrder(JSON.parse(saveOrder));
      }
    }

    loadData();
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token })
    }

    catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      }

      else {
        alert("Não foi possivel realizar o login.")
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:order");

    setData({});
    setOrder([]);
  }

  async function addToOrder(dishId, quantity) {
    // busca as informações do prato
    const response = await api.get(`/dishs/${dishId}`);
    const dishInfo = response.data;

    // adiciona a quantidade ao prato
    const newDish = { ...dishInfo, quantity };

    setOrder((prevOrder) => {
      // encontra o indice do pedido pendente
      const existingOrderIndex = prevOrder.findIndex(item => item.status === "pendente");

      let newOrder;

      if(existingOrderIndex > -1) {
        // atualiza o pedido existente
        newOrder = [...prevOrder]
        const existingOrder = newOrder[existingOrderIndex];

        // encontra o indice d prato no pedido ja existente
        const dishIndex = existingOrder.description.findIndex(dish => dish.dishId === dishId);

        if(dishIndex > -1) {
          // atualiza a quantidade do prato ja existente no pedido
          newOrder[existingOrderIndex].description[dishIndex].quantity += quantity;
        }

        else{
          // adiciona o prato ao pedido existente caso ja não esteja
          newOrder[existingOrderIndex].description.push(newDish);
        }
      }

      else {
        newOrder = [
          ...prevOrder,
          {
            id: uuidv4(),
            status: "pendente",
            description: [newDish],
            timestamp: new Date().toISOString()
          }
        ]
      }

      localStorage.setItem("@foodexplorer:order", JSON.stringify(newOrder));
      return newOrder;
    })
  };

  function getOrder() {
    return order;
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      getOrder,
      addToOrder,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }