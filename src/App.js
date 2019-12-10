import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import MainPg from './components/MainPg/MainPg';
import SignupPg from './components/SignupPg/SignupPg';
import SigninPg from './components/SigninPg/SigninPg';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="gap"></div>
                <div className='wrapper'>
                    <Route path="/signup" component={SignupPg} />
                    <Route path="/login" component={SigninPg} />
                    <Route path="/page" component={Page} />
                    <Route exact path="/" component={MainPg} />
                </div>
            </div>
        </BrowserRouter >
    );
}

function f() {

}

export default App;