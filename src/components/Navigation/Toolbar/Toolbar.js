import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div onClick={props.showSiderDrawer} className={classes.Menu}>MENU</div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
