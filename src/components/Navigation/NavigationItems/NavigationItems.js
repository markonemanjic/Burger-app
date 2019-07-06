import React from 'react'
import classes from './NavigationItems.module.css';
import NavigationSingleItem from './NavigationSingleItem';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationSingleItem link='/' active>Burger Builder</NavigationSingleItem>
      <NavigationSingleItem link='/'>Checkout</NavigationSingleItem>
    </ul>
  )
}

export default NavigationItems
