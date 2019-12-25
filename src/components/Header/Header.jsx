import React from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">MonoChrome</Navbar.Brand>
                <Nav className="mr-auto">
                    <Button variant="outline-dark" href={'/donate'}>Donate</Button>
                </Nav>
                <Nav>
                    <Button className="btn-dark" href={'/login'}>Login</Button>
                    <Button className="btn-dark" href={'/signup'}>SignUp</Button>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;