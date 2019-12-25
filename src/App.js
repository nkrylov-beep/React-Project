import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import MainPg from './components/MainPg/MainPg';
import SignupPg from './components/SignupPg/SignupPg';
import SigninPg from './components/SigninPg/SigninPg';
import { BrowserRouter, Route } from "react-router-dom";
import {registration, login} from './Methods';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                    <Header />
                    <Route path="/signup" render={props => <SignupPg registration={registration} {...props} />} />
                    <Route path="/login" render={props => <SigninPg login={login} {...props} />} />
                    <Route path="/page" component={Page} />
                    <Route exact path="/" component={MainPg} />
            </BrowserRouter >
        );
    }
}

export default App;