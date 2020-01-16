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
                </div>
                <div className={classes.toDialogs}>
                    {this.props.isAuthorized && <NavLink to='/page'>
                        <button className={classes.button}>К диалогам</button>
                    </NavLink>}
                </div>
                <div className={classes.signupBtn}>
                    {!this.props.isAuthorized && <NavLink to='/signup'>
                        <button className={classes.button}>Зарегистрироваться</button>
                    </NavLink>}
                </div>
                <div className={classes.info1}>Made with &#9829;</div>
                <div className={classes.info2}>by HΞH team</div>
                <div className={classes.kaomoji1}>(^ ω ^)</div>
                <div className={classes.kaomoji2}>＼(￣▽￣)／</div>
                <div className={classes.kaomoji3}>(ﾉ◕ヮ◕)ﾉ</div>
                <div className={classes.kaomoji4}>(⁀ᗢ⁀)</div>
                <div className={classes.kaomoji5}>＼(⌒▽⌒)</div>
                <div className={classes.kaomoji6}>(つ✧ω✧)つ</div>
                <div className={classes.kaomoji7}>(づ￣ ³￣)づ</div>
                <div className={classes.kaomoji8}>(*＾ω＾)人(＾ω＾*)</div>
                <div className={classes.kaomoji9}>(っ˘ڡ˘ς)</div>
                <div className={classes.kaomoji10}>(◕‿◕✿)</div>
                <div className={classes.kaomoji11}>(￣^￣)ゞ</div>
                <div className={classes.kaomoji12}>(ﾉ≧∀≦)ﾉ‥…━━━★</div>
            </div>
        );
    }
}

export default MainPg;