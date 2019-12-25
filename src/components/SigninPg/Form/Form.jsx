import React from 'react'
import classes from './Form.module.css';
import { NavLink } from "react-router-dom";

class Form extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.inscr}>
                    <div className={classes.loginInscr}><p className={classes.p}>login</p></div>
                    <div className={classes.gap2}></div>
                    <div className={classes.passwordInscr}><p className={classes.p}>password</p></div>
                    <div className={classes.gap2}></div>
                </div>
                <form className={classes.form} onSubmit={this.props.login}>
                    <input type='text' name='login' />
                    <div className={classes.gap}></div>
                    <input type="password" name='password' />
                    <div className={classes.gap}></div>
                    <button className={classes.button}>done</button>
                </form>
            </div>
        );
    }
}

export default Form;
