import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const [btnIsHighlighted, setBtnisHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  const { items } = cartCtx
  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnisHighlighted(true)

    setTimeout(() => {
      setBtnisHighlighted(false)
    }, 300)
  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
