import React from 'react';
import classes from './SigninPg.module.css';
import {Button, Form} from "react-bootstrap";

class SigninPg extends React.Component {

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="btn-danger" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default SigninPg;