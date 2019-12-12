import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import AddDialog from './AddDialog/AddDialog';

class Dialogs extends React.Component {
    render() {
        return (
            <div className={classes.dialogs}>
                <AddDialog />
                <Dialog />
                <Dialog />
            </div>
        );
    }
}

export default Dialogs;