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
  };

  async function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:order");

    setData({});
    setOrder([]);
  };

  function getOrder() {
    return order;
  };

  async function addToOrder(dishId, quantity) {
    try {
      const response = await api.get(`/dishs/${dishId}`);
      const dishInfo = response.data;

      const filteredDish = {
        id: dishInfo.id,
        name: dishInfo.name,
        photo: dishInfo.photo,
        price: dishInfo.price
      }

      const newDish = { ...filteredDish, quantity };
  
      setOrder((prevOrder) => {
        const existingOrderIndex = prevOrder.findIndex(item => item.status === "pendente");
        let newOrder;
  
        if (existingOrderIndex > -1) {
          newOrder = [...prevOrder];
          const existingOrder = newOrder[existingOrderIndex];
          const dishIndex = existingOrder.description.findIndex(dish => dish.id === dishId);
  
          if (dishIndex > -1) {
            newOrder[existingOrderIndex].description[dishIndex].quantity += quantity;
          } else {
            newOrder[existingOrderIndex].description.push(newDish);
          }
        } else {
          newOrder = [
            ...prevOrder,
            {
              id: uuidv4(),
              status: "pendente",
              description: [newDish],
              timestamp: new Date().toISOString()
            }
          ];
        }
  
        localStorage.setItem("@foodexplorer:order", JSON.stringify(newOrder));
        return newOrder;
      });
    } catch (error) {
      console.error("Error adding dish to order:", error);
    }
  };

  async function removeFromOrder(orderId, dishId = null, quantity = null) {
    try {
      setOrder((prevOrder) => {
        const newOrder = [...prevOrder];

        const existingOrderIndex = newOrder.findIndex(item => item.id === orderId);

        if (existingOrderIndex > -1) {
          const existingOrder = newOrder[existingOrderIndex];

          if(dishId) {
            const dishIndex = existingOrder.description.findIndex(dish => dish.id === dishId);

            if (dishIndex > -1) {
              const dishInOrder = existingOrder.description[dishIndex];
  
              if(quantity && dishInOrder.quantity > quantity) {
                dishInOrder.quantity -= quantity;
              }
              
              else {
                existingOrder.description.splice(dishIndex, 1);
              }
  
              if (existingOrder.description.length === 0) {
                newOrder.splice(existingOrderIndex, 1);
              }
            }
          }

          else {
            newOrder.splice(existingOrderIndex, 1);
          }
        };

        localStorage.setItem("@foodexplorer:order", JSON.stringify(newOrder));

        return newOrder;
      });
    }
    
    catch (error) {
      console.error("Error removing dish from order:", error);
    }
  };

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      getOrder,
      addToOrder,
      removeFromOrder,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth }