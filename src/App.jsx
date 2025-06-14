import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './assets/home/Home'
import Product from './Product/Product'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
