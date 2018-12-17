import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import Logo from './images/logo.png';
import Toggle from '../UI/Toggle/Toggle';

const Header = (props) => (
  <header className="Header">
    <img className="LogoImage" src={Logo} alt="YOUFLIX" />
    <div className="NavWrapper">
      <Navigation />
      <div className="RightItems">
        <Toggle toggleTheme={props.toggleTheme} />
        {/* Ver.1.0 */}
      </div>
    </div>
  </header>
);

export default Header;