import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem';


const links = [
{href: "/", name: "Browse"},
{href: "/", name: "My List"},

];

const Navigation = (props) => (
  <div id="navigation" class="Navigation">
    <nav>
    <ul>
      {links.map( link => (
        <NavigationItem href={link.href} name={link.name} />
      ))}
    </ul>
    </nav>
  </div>
);

export default Navigation;