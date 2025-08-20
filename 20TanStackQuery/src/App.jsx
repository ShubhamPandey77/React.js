import { useState } from 'react'
import Product from './Component/Product'
import Cart from './Component/Cart'
import {Routes,Route,NavLink} from 'react-router'
import './App.css'



function App() {


  return (
    <>  <h1>ONLINE SHOPPING APP</h1>
      <NavLink to='product'>Go To products</NavLink><br /><br />
      <NavLink to='Cart'>Go To Cart</NavLink>
      <br />
       <Routes>
        <Route path='product' element={<Product/>}></Route>
         <Route path='cart' element={<Cart/>}></Route>
       </Routes>
     


    </>
  )
}

export default App
