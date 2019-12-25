import React from 'react';
import classes from './SigninPg.module.css';
import {Button, Form} from "react-bootstrap";

class SigninPg extends React.Component {

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="login" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button className="btn-dark" type="submit">
                    Submit
               </Button>
            </Form>
        );
    }
}

export default SigninPg;