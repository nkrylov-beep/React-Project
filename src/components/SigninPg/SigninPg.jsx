import React from 'react';
import classes from './SigninPg.module.css';
import { NavLink } from "react-router-dom";

const SigninPg = () => {
    return (
        <div className={classes.container}>
            <div className={classes.inscription}><p className={classes.p2}>LOGIN</p></div>
            <div className={classes.nickField}><input /></div>
            <div className={classes.passwordField}><input /></div>
            <div className={classes.nickInscr}><p className={classes.p}>nickname</p></div>
            <div className={classes.passwordInscr}><p className={classes.p}>password</p></div>
            <div class={classes.signupBtn}>
                <NavLink to='/signup'>
                    <button className={classes.button}>sign up</button>
                </NavLink>
            </div>
        </div>
    );
}

export default SigninPg;