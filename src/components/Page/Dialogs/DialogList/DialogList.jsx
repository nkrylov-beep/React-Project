import React from 'react';
import classes from './DialogList.module.css';
import DialogItem from './DialogItem/DialogItem';


class DialogList extends React.Component {
    render() {
        return (
            <ul className={classes.dialoglist}>
                {this.props.dialogs && this.props.dialogs.map(dialog => {
                    return (
                        <DialogItem dialogData={dialog} onChoosingDialog={this.props.onChoosingDialog} id={this.props.id} key={dialog.id} />
                    )
                })}
            </ul>
        )
    }
}

export default DialogList;