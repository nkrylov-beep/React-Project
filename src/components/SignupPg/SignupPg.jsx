import React from 'react';
import classes from './SignupPg.module.css';
import { NavLink } from "react-router-dom";
import Form from './Form/Form';


class SignupPg extends React.Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.inscription}><p className={classes.p2}>REGISTRATION</p></div>
                <div className={classes.form}><Form registration={this.props.registration} /></div>
                <div className={classes.loginBtn}>
                    <NavLink to='/login'>
                        <button className={classes.button}>login</button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default SignupPg;