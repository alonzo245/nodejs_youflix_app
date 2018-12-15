import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem';


const links = [
{href: "/", name: "Main", exact: true},
{href: "/about", name: "About",  exact: true},

];

const Navigation = (props) => (
  <div id="navigation" className="Navigation">
    <nav>
    <ul>
      {links.map( (link, index) => (
        <NavigationItem key={index} href={link.href} name={link.name} exact={link.exact} />
      ))}
    </ul>
    </nav>
  </div>
);

export default Navigation;