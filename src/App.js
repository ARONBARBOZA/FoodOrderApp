import { Fragment, useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Card from './components/UI/Card'
import CartProvider from './store/CartProvider'

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false)
  const showCartHandler = () => {
    SetCartIsShown(true)
  }
  const hideCartHandler = () => {
    SetCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
