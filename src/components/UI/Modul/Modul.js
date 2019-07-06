import React, { Fragment } from 'react'
import classes from './Modul.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modul = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} cancelModul={props.cancelModul} />
      <div 
        className={classes.Modul}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </Fragment>
  )
}

export default Modul
