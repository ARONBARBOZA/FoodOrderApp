import { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {
  const [checkout, SetCheckout] = useState(false)
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = item => {
    cartCtx.addItems({ ...item, amount: 1 })
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const SetCheckoutHandler = () => {
    SetCheckout(true)
  }
  const modal = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={SetCheckoutHandler}>
          Order
        </button>
      )}
    </div>
  )
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && <Checkout onCancel={props.onClose} />}
      {!checkout && modal}
    </Modal>
  )
}

export default Cart
