import React, { Fragment } from 'react'

import MealsImage from '../../assets/Meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt="Delicous Food" />
      </div>
    </Fragment>
  )
}

export default Header
