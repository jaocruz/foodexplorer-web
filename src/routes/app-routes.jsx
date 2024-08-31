import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/home"
import { AddDish } from "../pages/add-dish"
import { EditDish } from "../pages/edit-dish"
import { DishDetails } from "../pages/dish-details"

import { Payment } from "../pages/payment"
import { Orders } from "../pages/orders"

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<AddDish/>} />
      <Route path="/edit/:id" element={<EditDish/>} />
      <Route path="/details/:id" element={<DishDetails/>} />

      <Route path="/payment" element={<Payment/>} />
      <Route path="/orders" element={<Orders/>} />
    </Routes>
  )
}