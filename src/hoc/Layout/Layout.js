
import React, { Component } from 'react';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
  state = {
    layoutClasses: 'Layout',
    themeToggler: false
  }

  toggleThemeHandler = () => {
    let toggle = !this.state.themeToggler;
    
    if(toggle){
      this.setState({
        layoutClasses: 'Layout Dark',
        themeToggler: toggle
      });
    } else {
      console.log('ss', this.state.themeToggler)
      this.setState({
        layoutClasses: 'Layout',
        themeToggler: toggle
      });
    }
  }

  render() {
    // const layoutClasses = this.props.togglePosition ? 'Layout Fixed Dark2' : 'Layout Dark2';
    return (
      <div className={this.state.layoutClasses}>
        <Header toggleTheme={this.toggleThemeHandler} {...this.props} />
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