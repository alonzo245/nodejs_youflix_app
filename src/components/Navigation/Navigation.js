import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem';


const links = [
{href: "/", name: "Main", exact: true},
{href: "/about", name: "About",  exact: true},

];

const Navigation = (props) => (
  
    <nav>
    <ul>
      {links.map( (link, index) => (
        <NavigationItem key={index} href={link.href} name={link.name} exact={link.exact} />
      ))}
    </ul>
    </nav>

);

export default Navigation;