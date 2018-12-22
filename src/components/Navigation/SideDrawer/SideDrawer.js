import React from 'react';
import Logo from '../../Logo/Logo';
import Toggle from '../../UI/Toggle/Toggle';
// import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';
import Navigation from '../../Navigation/Navigation';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className="TopMenu">
                    <Logo />
                    <Toggle toggleTheme={props.toggleTheme} />
                </div>
                <Navigation />
                <div className="Version">
                    Ver.1.0
                </div>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;