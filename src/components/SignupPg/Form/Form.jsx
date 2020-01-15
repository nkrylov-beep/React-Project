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
        const data = await this.props.registration(e);
        if (!data.id)
            this.setState({
                status: data
            });
    }
    render() {
        return (
            <form className={classes.form} onSubmit={this.handleClick}>
                <input type='text' name='name' placeholder="Имя"/>
                <div className={classes.gap}></div>
                <input type='text' name='login' placeholder="Логин"/>
                <div className={classes.gap}></div>
                <input type="password" name='password' placeholder="Пароль"/>
                <div className={classes.gap}></div>
                <input type="password" name='password2' placeholder="Повторите пароль"/>
                <div className={classes.gap}></div>
                <button className={classes.button}>готово</button>
                <div className={classes.status}>{this.state.status}</div>
            </form>
        );
    }
}

export default Form;