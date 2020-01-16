import React from 'react';
import classes from './SigninPg.module.css';
import {Button, Form} from "react-bootstrap";

class SigninPg extends React.Component {

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.inscription}><p className={classes.p2}>Авторизация</p></div>
                <div className={classes.form}><Form login={this.props.login}/></div>
                <div className={classes.loginBtn}></div>
                <div className={classes.signupBtn}>
                <NavLink to='/signup'>
                    <button className={classes.button}>Зарегистрироваться</button>
                </NavLink>
                </div>
            </div>
        );
    }
}

export default SigninPg;
