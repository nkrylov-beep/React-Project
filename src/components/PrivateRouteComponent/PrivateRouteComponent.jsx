import React from 'react';
import { Redirect, Route } from "react-router-dom";

class PrivateRouteComponent extends React.Component {
    render() {
        return (
            this.props.isAuthenticated ?
                (
                    <Route path={this.props.path} render={this.props.component} />
                    
                ) :
                (<Redirect to={{
                    pathname: this.props.redirectPath,
                    /*state: { from: this.props.path }*/
                }} />));
    }
}

export default PrivateRouteComponent;