import React from 'react';
import classes from './Page.module.css';
import Dialogs from './Dialogs/Dialogs';
import Content from './Content/Content';
import {getMessages} from './Content/Content';



class Page extends React.Component {
    getMessages;
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.dialogs}><Dialogs /></div>
                <div className={classes.content}><Content /></div>
            </div>
        );
    }
}

export default Page;