import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/home"
import { AddDish } from "../pages/add-dish"
import { EditDish } from "../pages/edit-dish"
import { DishDetails } from "../pages/dish-details"

import { Payment } from "../pages/payment"

import { Orders } from "../pages/orders"
import { Favorites } from "../pages/favorites"

export function AppRoutes(){
  const user = localStorage.getItem("@foodexplorer:user");
  
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<AddDish/>} />
      <Route path="/edit/:id" element={<EditDish/>} />
      <Route path="/details/:id" element={<DishDetails/>} />

      <Route path="/payment" element={<Payment/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/favorites" element={<Favorites/>} />

      <Route path="/payment/:orderId" element={<Payment />} />

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}