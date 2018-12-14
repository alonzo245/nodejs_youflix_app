import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import SearchInput from '../UI/SearchInput/SearchInput';
import Logo from './images/logo.png';

const Header = (props) => (
  <div className="Header">
  <img src={Logo} alt="YOUFLIX"/>
    <Navigation />
    <SearchInput />
  </div>
);

export default Header;