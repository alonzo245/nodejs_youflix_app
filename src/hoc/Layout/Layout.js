import React from 'react';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  const layoutClasses = props.togglePosition ? 'Layout Fixed Dark2' : 'Layout Dark2';

  return (
    <div className={layoutClasses}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )

}

export default Layout;