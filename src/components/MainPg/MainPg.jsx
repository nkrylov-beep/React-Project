import React from 'react';
import classes from './MainPg.module.css';
import { NavLink } from "react-router-dom";

const MainPg = () => {
    return (
        <div className={classes.container}>
            <div className={classes.loginBtn}>
                <NavLink to='/login'>
                    <button className={classes.button}>login</button>
                </NavLink>
            </div>
            <div className={classes.signupBtn}>
                <NavLink to='/signup'>
                    <button className={classes.button}>sign up</button>
                </NavLink>
            </div>
            <div className={classes.info}>ИПА ИНФА О САЙТЕ</div>
        </div>
    );
}

export default MainPg;