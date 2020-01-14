import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import MainPg from './components/MainPg/MainPg';
import SignupPg from './components/SignupPg/SignupPg';
import SigninPg from './components/SigninPg/SigninPg';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { registration, login, getUserData } from './Methods';
import PrivateRouteComponent from "./components/PrivateRouteComponent/PrivateRouteComponent";


class App extends React.Component {
    constructor() {
        super();
        this.customHistory = createBrowserHistory();
        this.state = {
            id: null,
            login: null,
            nickname: null,
            chat_list: null,
            contacts: null
        };
    }
    render() {
        return (
            <Router history={this.customHistory}>
                <Header isAuthorized={document.cookie} onExit={this.onExit} nickname={this.state.nickname} />
                <div className='wrapper'>
                    <PrivateRouteComponent path="/page" render={props => <Page
                        getUserData={this.getUserData}
                        nickname={this.state.nickname}
                    />} isAuthenticated={document.cookie} redirectPath="/" />
                    <PrivateRouteComponent path="/login" render={props => <SigninPg login={this.signin} />} isAuthenticated={!document.cookie} redirectPath="/page" />
                    <PrivateRouteComponent path="/signup" render={props => <SignupPg registration={this.signup} />} isAuthenticated={!document.cookie} redirectPath="/page" />
                    <Route path="/signup" render={props => <SignupPg registration={this.signup} />} />
                    <Route path="/login" render={props => <SigninPg login={this.signin} />} />
                    <Route path="/page" render={props => <Page
                        refreshUserData={this.refreshUserData} 
                        nickname={this.state.nickname}
                        />} />
                    <Route exact path="/" render={props => <MainPg isAuthorized={document.cookie} />} />
                </div>
            </Router >
        );
    }
    refreshUserData = async () => {
        const data = await getUserData();
        if (data.id) {
            this.setState({
                id: data.id,
                login: data.login,
                nickname: data.nickname,
                chat_list: data.chat_list,
                contacts: data.contacts
            });
        }
        return this.state;
    }
    signup = async (e) => {
        const data = await registration(e)
        if (data.id) {
            this.setState({
                id: data.id,
                login: data.login,
                nickname: data.nickname,
                chat_list: data.chat_list,
                contacts: data.contacts
            });
            this.customHistory.push('/page');
        }
        return data;
    }
    signin = async (e) => {
        const data = await login(e)
        if (data.id) {
            this.setState({
                id: data.id,
                login: data.login,
                nickname: data.nickname,
                chat_list: data.chat_list,
                contacts: data.contacts
            });
            this.customHistory.push('/page');
        }
        return data;
    }
    onExit = () => {
        var cookie_date = new Date();
        cookie_date.setTime(cookie_date.getTime() - 1);
        console.log(document.cookie += "=; expires=" + cookie_date.toGMTString());
        document.cookie = document.cookie.split("=")[1] += "=; expires=" + cookie_date.toGMTString();
        this.setState({
            id: null,
            login: null,
            nickname: null,
            chat_list: null,
            contacts: null
        });
        this.customHistory.push('/');
    }
}

export default App;