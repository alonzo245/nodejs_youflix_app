import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import SearchInput from '../UI/SearchInput/SearchInput';
import Logo from './images/logo.png';

const Header = (props) => (
  <header className="Header">
  <img src={Logo} alt="YOUFLIX"/>
    <Navigation />
    <SearchInput />
  </header>
);

export default Header;