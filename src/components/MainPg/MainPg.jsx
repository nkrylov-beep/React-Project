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
                    {this.props.isAuthorized && <NavLink to='/page'>
                        <button className={classes.button}>К сообщениям</button>
                    </NavLink>}
                </div>
                <div className={classes.signupBtn}>
                    {!this.props.isAuthorized && <NavLink to='/signup'>
                        <button className={classes.button}>Зарегистрироваться</button>
                    </NavLink>}
                </div>
                <div className={classes.info}>ТИПА ИНФА О САЙТЕ</div>
            </div>
        );
    }
}

export default MainPg;