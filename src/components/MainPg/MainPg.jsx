import React from 'react';
import classes from './MainPg.module.css';
import { NavLink } from "react-router-dom";

const MainPg = () => {
    return (
        <div class={classes.container}>
            <div class={classes.loginBtn}>
                <NavLink to='/login'>
                    <button className={classes.button}>login</button>
                </NavLink>
            </div>
            <div class={classes.signupBtn}>
                <NavLink to='/signup'>
                    <button className={classes.button}>sign up</button>
                </NavLink>
            </div>
            <div class={classes.info}><p3>ТИПА ИНФА О САЙТЕ</p3></div>
        </div>
    );
}

export default MainPg;