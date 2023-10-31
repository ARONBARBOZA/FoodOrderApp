import { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
  const [amountIsValid, SetAmountisValid] = useState(true)
  const amountInputRef = useRef()
  const submitHandler = event => {
    event.preventDefault()
    const enteredAmount = +amountInputRef.current.value

    if (enteredAmount < 1) {
      SetAmountisValid(false)
      return
    }
    props.onAddToCart(enteredAmount)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'Number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  )
}

export default MealItemForm
