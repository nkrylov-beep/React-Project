import React from 'react'
import classes from './Form.module.css';
import { NavLink } from "react-router-dom";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            status: ''
        }
    }
    async handleClick(e) {
        e.preventDefault();
        this.setState({
            status: await this.props.login(e)
        });
        console.log(this.state.status);
    }
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.inscr}>
                    <div className={classes.loginInscr}><p className={classes.p}>login</p></div>
                    <div className={classes.gap2}></div>
                    <div className={classes.passwordInscr}><p className={classes.p}>password</p></div>
                    <div className={classes.gap2}></div>
                </div>
                <form className={classes.form} onSubmit={this.handleClick}>
                    <input type='text' name='login' />
                    <div className={classes.gap}></div>
                    <input type="password" name='password' />
                    <div className={classes.gap}></div>
                    <button className={classes.button}>done</button>
                    <div className={classes.status}>{this.state.status}</div>
                </form>
            </div>
        );
    }
}

export default Form;
