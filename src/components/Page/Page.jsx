import React from 'react';
import classes from './Page.module.css';
import Dialogs from './Dialogs/Dialogs';
import Content from './Content/Content';
import AddDialogPg from './AddDialogPg/AddDialogPg';


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addDlgBtnInscr: "Создать диалог",
            messages: [
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
            dialogs: [
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
    componentDidMount() {
        const data = this.props.refreshUserData;
        console.log(data);
    }
    choosingDialog = (dialogValue) => {
        if (dialogValue == -1 && this.state.dialogId == dialogValue) {
            this.state.addDlgBtnInscr = "Создать диалог";
            dialogValue = -2;
        }
        if (dialogValue == -1 && this.state.dialogId != dialogValue) {
            this.state.addDlgBtnInscr = "Отмена";
        }
        this.setState({
            dialogId: dialogValue,
            addDlgBtnInscr: this.state.addDlgBtnInscr
        })
    }
    createDialog = (dlgName) => {
        this.state.dialogs.unshift({
            dialogId: dlgName,
            lastsenderId: "Vasilii",
            text: "perfocards!!!"
        });
        this.setState({
            dialogId: -2,
            dialogs: this.state.dialogs,
            addDlgBtnInscr: "Создать диалог"
        })
    }
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.info}> Список диалогов пользователя {this.props.nickname}</div>
                <div className={classes.dialogs}><Dialogs onChoosingDialog={this.choosingDialog} dlgs={this.state.dialogs} inscr={this.state.addDlgBtnInscr} /></div>
                <div className={classes.content}>
                    {this.state.dialogId == -1 && <AddDialogPg onCreateDlg={this.createDialog} />}
                    {this.state.dialogId == -2 && <div />}
                    {this.state.dialogId > 0 && <Content msgs={this.state.messages} />}
                </div>
            </div>
        );
    }
}

export default Page;