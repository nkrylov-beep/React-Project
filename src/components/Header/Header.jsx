import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from "react-bootstrap";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.props.onExit();
    }
    render() {
        return (
            <div className={classes.header}>
                <img src="./favicon.ico" alt="logo" />
                <NavLink className={classes.link} to='/'>
                    HΞHMΔΛ
                </NavLink>
                <div className={classes.userName}>
                    {document.cookie && `Пользователь: ${this.props.nickname}`}
                </div>
                <div className={classes.exitButton}>
                    {document.cookie && <div className={classes.link} onClick={this.handleClick}>
                        Выйти
                    </div>}
                </div>
            </div >
        );
    }
}

export default Header;
