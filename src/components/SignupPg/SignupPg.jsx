import React from 'react';
import classes from './SignupPg.module.css';

const SignupPg = () => {
    return (
        <div className={classes.container}>
            <div className={classes.inscription}><p className={classes.p2}>REGISTRATION</p></div>
            <div className={classes.nickField}><input /></div>
            <div className={classes.passwordField}><input /></div>
            <div className={classes.passwordField2}><input /></div>
            <div className={classes.nickInscr}><p className={classes.p}>nickname</p></div>
            <div className={classes.passwordInscr}><p className={classes.p}>password</p></div>
            <div className={classes.passwordInscr2}><p className={classes.p}>repeat password</p></div>
        </div>
    );
}

export default SignupPg;