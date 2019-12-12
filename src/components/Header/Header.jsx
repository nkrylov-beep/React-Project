import React from 'react';
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className={classes.header}>
                <div className={classes.logo}>
                    <img src="./favicon.ico"></img>
                </div>
                <div className={classes.name}>
                    <NavLink to='/'>
                        <p className={classes.p}>No Gnomes Allowed</p>
                    </NavLink>
                </div>
            </header>
        );
    }
}

export default Header;