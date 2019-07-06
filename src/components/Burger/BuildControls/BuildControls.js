import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  //Get all controls in array, so its easier to map
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
  ];

  return (
    <div className={classes.BuildControls}>
      <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
      <p>You need to have $4.5 or more to order!</p>
      {controls.map(ctrl => {
        return <BuildControl 
          key={ctrl.label} 
          label={ctrl.label} 
          added={() => props.ingredientAdd(ctrl.type)}
          removed={() => props.ingredientRemove(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      })}
      <button 
        className={classes.OrderButton}
        disabled={!props.purscable}
        onClick={props.isOrderClicked}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls
