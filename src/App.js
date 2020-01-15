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
            chat_list: [
                {
                    dialogId: "dialog1",
                    lastsenderId: "perborgen",
                    text: "who'll win you think?",
                },
                {
                    dialogId: "dialog2",
                    lastsenderId: "janedoe",
                    text: "Brazil!"
                },
                {
                    dialogId: "dialog2",
                    lastsenderId: "janedoe",
                    text: "Brazil!"
                },
                {
                    dialogId: "dialog2",
                    lastsenderId: "janedoe",
                    text: "Brazil!"
                },
                {
                    dialogId: "dialog2",
                    lastsenderId: "janedoe",
                    text: "Brazil!"
                },
                {
                    dialogId: "dialog2",
                    lastsenderId: "janedoe",
                    text: "Brazil!"
                },
                {
                    dialogId: "dialog2",
                    lastsenderId: "janedoe",
                    text: "Brazil!"
                }
            ]
        };
    }
    render() {
        return (
            <Router history={this.customHistory}>
                <Header isAuthorized={document.cookie} onExit={this.onExit} nickname={this.state.nickname} />
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
                chat_list: this.state.chat_list,
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
    onChoosingDialog = (dialogValue) => {
        if (dialogValue == -1 && this.state.dialogId == dialogValue) {
            this.state.addDlgBtnInscr = "Добавить диалог";
            dialogValue = -2;
        }
        if (dialogValue == -1 && this.state.dialogId != dialogValue) {
            this.state.addDlgBtnInscr = "Отмена";
        }
        this.setState({
            dialogId: dialogValue,
            addDlgBtnInscr: this.state.addDlgBtnInscr
        });
        return this.state.dialogId;
    }
    createDialog = (dlgName) => {
        this.state.chat_list.unshift({
            dialogId: dlgName,
            lastsenderId: "Vasilii",
            text: "perfocards!!!"
        });
        this.setState({
            dialogId: -2,
            chat_list: this.state.dialogs,
            addDlgBtnInscr: "Создать диалог"
        })
        console.log(this.state.chat_list)
    }
}

export default App;