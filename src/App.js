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
            <script src="jquery-3.4.1.min.js"></script>
            <div className='app-wrapper'>
                <Header />
                <div className='wrapper'>
                    <Route path="/signup" component={SignupPg} />
                    <Route path="/login" component={SigninPg} />
                    <Route path="/page" component={Page} />
                    <Route exact path="/" component={Page} />
                </div>
            </div>
            <button onClick={$.post("https://hehmda.herokuapp.com/api/v1/chats/getnewmessages", { "chat_id": "1", "last_id": "-1" })}>
                КНОПКА
            </button>
        </BrowserRouter >
    );
}

function f(){
    
}

export default App;