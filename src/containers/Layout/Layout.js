import React, { Fragment } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  }

  //Handler for closing and opening SideDrawer component
  sideDrawerClosedOpenHandler = () => {        
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <Fragment>
        <Toolbar showSiderDrawer={this.sideDrawerClosedOpenHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedOpenHandler} />
        <main className={classes.main}>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout;
