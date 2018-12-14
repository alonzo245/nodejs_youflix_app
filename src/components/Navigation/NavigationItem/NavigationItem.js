import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.scss';

const NavigationItem = (props) => (
  <li>
    <NavLink className="Link" to={props.href}>
      {props.name}
    </NavLink>
  </li>
);

export default NavigationItem;