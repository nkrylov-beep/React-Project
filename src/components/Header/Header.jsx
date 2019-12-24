import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from "react-bootstrap";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <NavLink className={classes.link} to='/'>
                        Nazvanie
            </NavLink>
                </Navbar.Brand>
                <Nav>
                    <NavLink to="/signup">
                        <Button variant="dark">SignUp</Button>
                    </NavLink>
                    <NavLink to="/login">
                        <Button variant="dark">Login</Button>
                    </NavLink>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
