import React from 'react';
import classes from './Page.module.css';
import Dialogs from './Dialogs/Dialogs';
import Content from './Content/Content';
import AddDialogPg from './AddDialogPg/AddDialogPg';


class Page extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
        };
    }
    componentDidMount() {
        this._isMounted = true;
        this.props.refreshUserData();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.info}> Список диалогов пользователя {this.props.nickname}</div>
                <div className={classes.dialogs}><Dialogs
                    onChoosingDialog={this.props.onChoosingDialog}
                    dlgs={this.props.chat_list}
                    inscr={this.props.inscr}
                    id={this.props.id}
                /></div>
                <div className={classes.content}>
                    {this.props.dialogId == -1 && <AddDialogPg onCreateDlg={this.props.createDialog} />}
                    {this.props.dialogId == -2 && <div />}
                    {this.props.dialogId > 0 && <Content msgs={this.props.cur_messages} />}
                </div>
            </div>
        );
    }
}

export default Page;