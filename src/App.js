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
            contacts: null,
            dialogId: -2,
            addDlgBtnInscr: "Добавить диалог",
            cur_messages: [
                {
                    author: "dfhtrfh",
                    text: "dgh",
                    time: "12 Января 04:13"
                },
                {
                    author: "dfhtrfh",
                    text: "dgh",
                    time: "12 Января 04:13"
                },
                {
                    author: "dfhtrfh",
                    text: "dgh",
                    time: "12 Января 04:13"
                }
            ],
            chat_list: null
        }
    }
    render() {
        return (
            <Router history={this.customHistory}>
                <Header onExit={this.onExit} nickname={this.state.nickname} />
                <div className='wrapper'>
                    <PrivateRouteComponent path="/page" render={props => <Page
                        refreshUserData={this.getUserData}
                        nickname={this.state.nickname}
                        chat_list={this.state.chat_list}
                        cur_messages={this.state.cur_messages}
                        inscr={this.state.addDlgBtnInscr}
                        onChoosingDialog={this.onChoosingDialog}
                        dialogId={this.state.dialogId}
                        createDialog={this.createDialog}
                        id={this.state.id}
                        onRefreshMessageList={this.addMessage}
                    />} isAuthenticated={document.cookie} redirectPath="/" />
                    <PrivateRouteComponent path="/login" render={props => <SigninPg login={this.signin} />} isAuthenticated={!document.cookie} redirectPath="/page" />
                    <PrivateRouteComponent path="/signup" render={props => <SignupPg registration={this.signup} />} isAuthenticated={!document.cookie} redirectPath="/page" />
                    <Route path="/signup" render={props => <SignupPg registration={this.signup} />} />
                    <Route path="/login" render={props => <SigninPg login={this.signin} />} />
                    <Route path="/page" render={props => <Page
                        refreshUserData={this.refreshUserData}
                        nickname={this.state.nickname}
                        chat_list={this.state.chat_list}
                        cur_messages={this.state.cur_messages}
                        inscr={this.state.addDlgBtnInscr}
                        onChoosingDialog={this.onChoosingDialog}
                        dialogId={this.state.dialogId}
                        createDialog={this.createDialog}
                        id={this.state.id}
                        onRefreshMessageList={this.addMessage}
                    />} />
                    <Route exact path="/" render={props => <MainPg isAuthorized={document.cookie} />} />
                </div>
            </Router >
        );
    }
    refreshUserData = async () => {
        const data = await getUserData();
        if (data) {
            const chats_request = await fetch('https://hehmda.herokuapp.com/api/v1/users/chats', {
                method: 'POST',
                body: `{\"id\": \"${data.id}\", \"session\": \"${document.cookie.split("=")[1]}\"}`
            });
            const chats = await chats_request.json();
            this.setState({
                id: data.id,
                login: data.login,
                nickname: data.nickname,
                contacts: data.contacts,
                chat_list: chats
            });
            return this.state;
        }
    }
    signup = async (e) => {
        const data = await registration(e)
        if (data.id) {
            const chats_request = await fetch('https://hehmda.herokuapp.com/api/v1/users/chats', {
                method: 'POST',
                body: `{\"id\": \"${data.id}\", \"session\": \"${document.cookie.split("=")[1]}\"}`
            });
            const chats = await chats_request.json();
            this.setState({
                id: data.id,
                login: data.login,
                nickname: data.nickname,
                contacts: data.contacts,
                chat_list: chats
            });
            this.customHistory.push('/page');
        }
        return data;
    }
    signin = async (e) => {
        const data = await login(e)
        if (data.id) {
            const chats_request = await fetch('https://hehmda.herokuapp.com/api/v1/users/chats', {
                method: 'POST',
                body: `{\"id\": \"${data.id}\", \"session\": \"${document.cookie.split("=")[1]}\"}`
            });
            const chats = await chats_request.json();
            this.setState({
                id: data.id,
                login: data.login,
                nickname: data.nickname,
                contacts: data.contacts,
                chat_list: chats
            });
            this.customHistory.push('/page');
        }
        return data;
    }
    onExit = () => {
        var cookie_date = new Date();
        cookie_date.setTime(cookie_date.getTime() - 1);
        document.cookie += "=; expires=" + cookie_date.toGMTString();
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
    onChoosingDialog = async (dialogValue) => {
        if (dialogValue == -1 && this.state.dialogId == dialogValue) {
            this.state.addDlgBtnInscr = "Добавить диалог";
            dialogValue = -2;
        }
        if (dialogValue == -1 && this.state.dialogId != dialogValue) {
            this.state.addDlgBtnInscr = "Отмена";
        }
        else {
            this.state.addDlgBtnInscr = "Добавить диалог";
            const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/chats/getnewmessages', {
                method: 'POST',
                body: `{\"chat_id\":\"${dialogValue}\", \"last_id\":\"1\"}`
            });
            const data = await api_url.json();
            console.log(data);
            if (Array.isArray(data)) {
            } else {
            }
        }
        this.setState({
            dialogId: dialogValue,
            addDlgBtnInscr: this.state.addDlgBtnInscr,
            chat_list: ""
        });
    }
    createDialog = async (dlgName) => {
        const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/users/addcontactbylogin', {
            method: 'POST',
            body: `{\"login\": \"${dlgName}\", \"session\": \"${document.cookie.split("=")[1]}\"}`
        });
        const data = await api_url.json();
        if (data.code && data.code != 200) {
            return data.status_msg;
        } else {
            await fetch('https://hehmda.herokuapp.com/api/v1/chats/addtochat', {
                method: 'POST',
                body: `{\"new_user_id\": \"${data.id}\", \"chat_id\": \"\", \"session\": \"${document.cookie.split("=")[1]}\"}`
            });
            const chats_request = await fetch('https://hehmda.herokuapp.com/api/v1/users/chats', {
                method: 'POST',
                body: `{\"id\": \"${this.state.id}\", \"session\": \"${document.cookie.split("=")[1]}\"}`
            });
            const chats = await chats_request.json();
            this.setState({
                dialogId: -2,
                addDlgBtnInscr: "Добавить диалог",
                chat_list: chats
            })
        }
    }
    addMessage = async (message) => {
        console.log(this.state.dialogId)
        await fetch('https://hehmda.herokuapp.com/api/v1/chats/send', {
            method: 'POST',
            body: `{\"chat_id\": \"${this.state.dialogId}\", \"content\": \"${message.text}\", \"session\": \"${document.cookie.split("=")[1]}\"}`
        })
        this.state.cur_messages.push(message)
        this.setState({
            cur_messages: this.state.cur_messages
        });
    }
}

export default App;