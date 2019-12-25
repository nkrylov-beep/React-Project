import React from 'react';
import classes from './SigninPg.module.css';
import { NavLink } from "react-router-dom";
import Form from './Form/Form'

class SigninPg extends React.Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.inscription}><p className={classes.p2}>LOGIN</p></div>
                <div className={classes.form}><Form login={this.props.login}/></div>
                <div className={classes.loginBtn}></div>
                <div className={classes.signupBtn}>
                <button className={classes.button}>sign up</button>
                </div>
            </div>
        );
    }
}

export default SigninPg;
