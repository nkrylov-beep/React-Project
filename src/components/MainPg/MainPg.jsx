import React from 'react';
import classes from './MainPg.module.css';
import { NavLink } from "react-router-dom";

class MainPg extends React.Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.loginBtn}>
                    {!this.props.isAuthorized && <NavLink to='/login'>
                        <button className={classes.button}>Авторизоваться</button>
                    </NavLink>}
                </div>
                <div className={classes.toDialogs}>
                    {this.props.isAuthorized && <NavLink to='/page'>
                        <button className={classes.button}>К диалогам</button>
                    </NavLink>}
                </div>
                <div className={classes.signupBtn}>
                    {!this.props.isAuthorized && <NavLink to='/signup'>
                        <button className={classes.button}>Зарегистрироваться</button>
                    </NavLink>}
                </div>
                <div className={classes.info1}>Made with &#9829;</div>
                <div className={classes.info2}>by HΞH team</div>
            </div>
        );
    }
}

export default MainPg;