import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import Logo from './images/logo.png';

const Header = (props) => (
  <header className="Header">
    <div className="LeftItems">
      <img className="LogoImage" src={Logo} alt="YOUFLIX" />
      <Navigation />
    </div>
    <div className="Version">Ver.1.0</div>
  </header>
);

export default Header;