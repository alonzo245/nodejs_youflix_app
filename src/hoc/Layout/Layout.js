import React, { Component } from 'react';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  const layoutClasses = props.togglePosition ? 'Layout Fixed' : 'Layout';
console.log('props.togglePosition',props.togglePosition)
  return (
    <div className={layoutClasses} >
      <Header />
      {props.children}
      <Footer />
    </div>
  )

}

export default Layout;