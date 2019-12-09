import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="./favicon.ico"></img>
            </div>
            <div className={classes.name}>
                <p className={classes.p}>No Gnomes Allowed</p>
            </div>
        </header>
    );
}

export default Header;