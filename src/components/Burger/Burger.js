import React from 'react';
import classes from './Burger.module.css';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';

const Burger = (props) => {
  //Destructure ingredients from props
  const { ingredients } = props;

  //Transform state from object to an array
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])]
        .map((_, i) => {
          return <BurgerIngrediant key={igKey + i} type={igKey} />
        });
    })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

  //If there's non ingredients, then show the message
  if ( transformedIngredients.length === 0 ) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngrediant type="bread-top" />
      {transformedIngredients}
      <BurgerIngrediant type="bread-bottom" />
    </div>
  )
}

export default Burger;