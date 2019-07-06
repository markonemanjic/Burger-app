import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modul from '../../components/UI/Modul/Modul';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//Prices for ingredients
const INGREDIENTS_PRICES = {
  salad: 0.7,
  cheese: 1.0,
  bacon: 1.5,
  meat: 2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 3,
    //can you order checker
    purscable: false,
    //button for order
    isClickedPurchase: false
  }

  //Click handler on order button
  purchaseHandler = () => {
    this.setState({ isClickedPurchase: true })
  }

  //Cancels the purchase
  cancelPurchaseHandler = () => {
    this.setState({ isClickedPurchase: false})
  }

  //Continues the purchase
  purchaseContinueHandler = () => {
    alert("You continue!");
  }

  //Updates the ORDER NOW button enable/disabled
  updatePurscableButton = (newPrice) => {
    if ( newPrice >= 4.5 ) {
      this.setState({
        purscable: true
      })
    }
  }

  //Adds ingredient to the burger
  addIngredientHandler = type => {
    //get old number of indgredients and add it
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    //copy ingredients to a new object and add new amount of ingredietns
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    //get the prices right
    const priceAdditon = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdditon;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    //Check if there's enough stuff to order
    this.updatePurscableButton(newPrice);
  }

  //Removes ingredient of the burger
  removeIngredientHandler = type => {
    const currentCount = this.state.ingredients[type];
    //if there's no ingredients return nothing
    if(currentCount <= 0) {
      return;
    }
    const updatedCount = currentCount - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    //Check if there's enough stuff to order
    this.updatePurscableButton(newPrice);
  }

  render() {
    //Get ingrediants that are equal to 0
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      //disabledInfo now returns boolen true or false
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Fragment>
        <Modul 
          show={this.state.isClickedPurchase} 
          cancelModul={this.cancelPurchaseHandler}>
            <OrderSummary 
              ingredients={this.state.ingredients}
              cancel={this.cancelPurchaseHandler}
              continue={this.purchaseContinueHandler}
              totalPrice={this.state.totalPrice}/>
        </Modul>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdd={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purscable={this.state.purscable}
          isOrderClicked={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
