import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import Logo from './images/logo.png';
import Toggle from '../UI/Toggle/Toggle';

const Header = (props) => (
  <header className="Header">
    <div className="LeftItems">
      <img className="LogoImage" src={Logo} alt="YOUFLIX" />
      <Navigation />
    </div>
    <div className="">
      <Toggle toggleTheme={props.toggleTheme} />
      {/* Ver.1.0 */}
    </div>
  </header>
);

export default Header;