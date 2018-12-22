import React, { Component } from 'react';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    themeToggler: false,
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  toggleThemeHandler = () => {
    let toggle = !this.state.themeToggler;

    if (toggle) {
      document.body.classList.add('Dark');
      this.setState({
        themeToggler: toggle
      });
    } else {
      document.body.classList.remove('Dark');
      this.setState({
        themeToggler: toggle
      });
    }
  }

  render() {
    return (
      <div className="Layout">
        <SideDrawer
        toggleTheme={this.toggleThemeHandler}
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <Header
          drawerToggleClicked={this.sideDrawerToggleHandler}
          
          {...this.props}
        />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}

export default Layout;

/*
import React from 'react';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const toggleTheme = () => {
  console.log('sss')
}
const Layout = (props) => {
  const layoutClasses = props.togglePosition ? 'Layout Fixed Dark2' : 'Layout Dark2';

  return (
    <div className={layoutClasses}>
      <Header toggleTheme={toggleTheme} />
      {props.children}
      <Footer />
    </div>
  )

}

export default Layout;
*/