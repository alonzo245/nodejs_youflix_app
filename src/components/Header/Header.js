import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import Logo from './images/logo.png';
import AuthButton from '../UI/AuthButton/AuthButton';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
const Header = (props) => {

  return (
    <header className="Header">
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <Link to="/">
        <img className="LogoImage" src={Logo} alt="YOUFLIX" />
      </Link>
      <div className="NavWrapper">
        <div className="Navigation">
          <Navigation />
        </div>
        <div className="RightItems">
          <AuthButton clicked={props.login} isAuth={props.isAuth} />
        </div>
      </div>
    </header>
  )
};

export default Header;