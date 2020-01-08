import React from 'react';
import classes from './Page.module.css';
import Dialogs from './Dialogs/Dialogs';
import Content from './Content/Content';



class Page extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Inokentii"
        };
    }
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.info}>user info: name {this.state.name}</div>
                <div className={classes.dialogs}><Dialogs /></div>
                <div className={classes.content}><Content /></div>
            </div>
        );
    }
}

export default Page;