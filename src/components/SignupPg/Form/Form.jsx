import React from 'react'
import classes from './Form.module.css';
import { NavLink } from "react-router-dom";

class Form extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.inscr}>
                    <div className={classes.nickInscr}><p className={classes.p}>laxname</p></div>
                    <div className={classes.gap2}></div>
                    <div className={classes.loginInscr}><p className={classes.p}>login</p></div>
                    <div className={classes.gap2}></div>
                    <div className={classes.passwordInscr}><p className={classes.p}>password</p></div>
                    <div className={classes.gap2}></div>
                    <div className={classes.passwordInscr2}><p className={classes.p}>repeat password</p></div>
                    <div className={classes.gap2}></div>
                </div>
                <form className={classes.form}>
                    <input type='text' name='name' />
                    <div className={classes.gap}></div>
                    <input type='text' name='login' />
                    <div className={classes.gap}></div>
                    <input type="password" name='password' />
                    <div className={classes.gap}></div>
                    <input type="password" name='password2' />
                    <div className={classes.gap}></div>
                    <NavLink to='/page'>
                        <button className={classes.button}>done</button>
                    </NavLink>
                </form>
            </div>
        );
    }
}

export default Form;