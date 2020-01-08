import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import AddDialog from './AddDialog/AddDialog';

const DUMMY_DATA = [
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
  }
]

class Dialogs extends React.Component {
  constructor() {
    super();
    this.state = {
      dialogs: DUMMY_DATA
    };
  }
  render() {
    return (
      <div className={classes.dialogs}>
        <AddDialog />
        <DialogList dialogs={this.state.dialogs} />
      </div>
    );
  }
}

class DialogList extends React.Component {
  render() {
    return (
      <ul className={classes.dialoglist}>
        {this.props.dialogs.map(dialog => {
          return (
            <ul key={dialog.id} className={classes.dialog}>
              <div>
                {dialog.dialogId}
              </div>
              <div>
                <span className={classes.lastsenderId}>{dialog.lastsenderId}</span>: {dialog.text}
              </div>
            </ul>
          )
        })}
      </ul>
    )
  }
}

export default Dialogs;