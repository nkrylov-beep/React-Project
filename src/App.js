import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import SignupPg from './components/SignupPg/SignupPg';
import SigninPg from './components/SigninPg/SigninPg';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <div className='wrapper'>
                    <Route path="/signup" component={SignupPg} />
                    <Route path="/login" component={SigninPg} />
                    <Route path="/page" component={Page} />
                </div>
            </div>
        </BrowserRouter >
    );
}

export default App;