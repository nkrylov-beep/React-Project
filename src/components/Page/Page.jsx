import React from 'react';
import classes from './Page.module.css';
import Dialogs from './Dialogs/Dialogs';
import Content from './Content/Content';
import AddDialogPg from './AddDialogPg/AddDialogPg';


class Page extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Inokentii",
            status: 0,
            messages: [
                {
                    author: "dfhtrfh",
                    text: "dgh",
                },
                {
                    author: "dfhtrfh",
                    text: "dgh",
                },
                {
                    author: "dfhtrfh",
                    text: "dgh",
                }
            ],
            dialogs: [
                {
                    dialogId: "dialog1",
                    lastsenderId: "perborgen",
                    text: "who'll win you think?"
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
    choosingDialog = (dialogValue) => {
        this.setState({
            status: dialogValue
        })
    }
    createDialog = (dlgName) => {
        this.state.dialogs.unshift({
            dialogId: dlgName,
            lastsenderId: "Vasilii",
            text: "perfocards!!!"
        });
        this.setState({
            dialogs: this.state.dialogs,
            status: 0
        })
    }
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.info}>user info: name {this.state.name}</div>
                <div className={classes.dialogs}><Dialogs onChoosingDialog={this.choosingDialog} dlgs={this.state.dialogs} status={this.state.status}/></div>
                <div className={classes.content}>
                    {this.state.status == -1 && <AddDialogPg onCreateDlg={this.createDialog} />}
                    {this.state.status == null && <div />}
                    {this.state.status > -1 && <Content msgs={this.state.messages} />}
                </div>
            </div>
        );
    }
}

export default Page;