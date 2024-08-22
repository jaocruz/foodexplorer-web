import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/home"
import { AddDish } from "../pages/add-dish"
import { EditDish } from "../pages/edit-dish"
import { DishDetails } from "../pages/dish-details"

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<AddDish/>} />
      <Route path="/edit/:id" element={<EditDish/>} />
      <Route path="/details/:id" element={<DishDetails/>} />
    </Routes>
  )
}