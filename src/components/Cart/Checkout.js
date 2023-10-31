import { useRef } from 'react'
import classes from './Checkout.module.css'

const Checkout = props => {
  const nameInputRef = useRef()
  const AddressInputRef = useRef()
  const PostalInputRef = useRef()
  const CityInputRef = useRef()

  const confirmHandler = event => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredAdd = AddressInputRef.current.value
    const EnteredPostalCode = PostalInputRef.current.value
    const enteredCity = CityInputRef.current.value
  }

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={AddressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={PostalInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={CityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
