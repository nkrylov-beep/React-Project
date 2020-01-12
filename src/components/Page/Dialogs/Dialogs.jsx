import React from 'react';
import classes from './Dialogs.module.css';
import DialogList from './DialogList/DialogList';
import AddDialog from './AddDialog/AddDialog';


class Dialogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogs: this.props.dlgs
    };
  }
  render() {
    return (
      <div className={classes.dialogs}>
        <AddDialog onChoosingDialog={this.props.onChoosingDialog} inscr={this.props.inscr}/>
        <DialogList dialogs={this.state.dialogs} onChoosingDialog={this.props.onChoosingDialog} />
      </div>
    );
  }
}

export default Dialogs;