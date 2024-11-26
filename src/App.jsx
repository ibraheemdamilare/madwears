import './index.css'
import Home from './Pages/Home'
import Navbar from '../src/Components/Navbar'
import Top from '../src/Components/Top'

import { Routes, Route} from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
import { useState } from 'react'

function App() {

  const [number, setNumber] = useState(5)
  const [cartNumber, setCartNumber] = useState(5)

  return (
    <>

      <Top />
      <Navbar cartNumber= {cartNumber} />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route path="/product/:id" element={<ProductDetails number={number} setNumber={setNumber} setCartNumber={setCartNumber} />} />
        </Routes>

    </>
  )
}

export default App
