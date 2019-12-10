import React from 'react';
import classes from './SignupPg.module.css';
import { NavLink } from "react-router-dom";


const SignupPg = () => {
    return (
        <div className={classes.container}>
            <div className={classes.inscription}><p className={classes.p2}>REGISTRATION</p></div>
            <div className={classes.nickField}><input /></div>
            <div className={classes.loginField}><input /></div>
            <div className={classes.passwordField}><input /></div>
            <div className={classes.passwordField2}><input /></div>
            <div className={classes.nickInscr}><p className={classes.p}>nickname</p></div>
            <div className={classes.loginInscr}><p className={classes.p}>login</p></div>
            <div className={classes.passwordInscr}><p className={classes.p}>password</p></div>
            <div className={classes.passwordInscr2}><p className={classes.p}>repeat password</p></div>
            <div class={classes.loginBtn}>
                <NavLink to='/login'>
                    <button className={classes.button}>login</button>
                </NavLink>
            </div>
            <div class={classes.doneBtn}>
                <NavLink to='/done'>
                    <button className={classes.button}>done</button>
                </NavLink>
            </div>
        </div>
    );
}

export default SignupPg;