import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import Logo from './images/logo.png';

import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const Header = (props) => (
  <header className="Header">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <img className="LogoImage" src={Logo} alt="YOUFLIX" />
    <div className="NavWrapper">
      <div className="Navigation">
        <Navigation />
      </div>
      <div className="RightItems">
        Login
      </div>
    </div>
  </header>
);

export default Header;