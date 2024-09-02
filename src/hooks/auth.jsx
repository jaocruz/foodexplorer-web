import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

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

  function addToOrder(dishId, quantity) {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(item => item.dishId === dishId);

      let newOrder;

      if(existingItem) {
        newOrder = prevOrder.map(item =>
          item.dishId === dishId ? {...item, quantity: item.quantity + quantity} : item
        );
      }

      else {
        newOrder = [...prevOrder, { dishId, quantity }];
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