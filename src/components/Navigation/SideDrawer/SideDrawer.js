import React, { Fragment } from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  //Set by default Closed class
  let attachedClasses = [classes.SideDrawer, classes.Close];
  //Check if its open and if it is set Open class
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} cancelModul={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  )
}

export default sideDrawer
