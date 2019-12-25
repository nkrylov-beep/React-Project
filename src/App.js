import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import MainPg from './components/MainPg/MainPg';
import SignupPg from './components/SignupPg/SignupPg';
import SigninPg from './components/SigninPg/SigninPg';
import { BrowserRouter, Route } from "react-router-dom";
import { registration, login } from './Methods';
import { getMessages } from './components/Page/Content/Content';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <script>getMessages</script>
                    <Header />
                    <div className="gap"></div>
                    <div className='wrapper'>
                        <Route path="/signup" render={props => <SignupPg registration={registration} {...props} />} />
                        <Route path="/login" render={props => <SigninPg login={login} {...props} />} />
                        <Route path="/page" component={Page} />
                        <Route exact path="/" component={MainPg} />
                    </div>
                </div>
            </BrowserRouter >
        );
    }
}

export default App;