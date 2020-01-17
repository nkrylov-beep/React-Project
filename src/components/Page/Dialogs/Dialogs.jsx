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
    this.refreshChats();
    return (
      <div className={classes.dialogs}>
        <AddDialog onChoosingDialog={this.props.onChoosingDialog} inscr={this.props.inscr} />
        <DialogList dialogs={this.state.dialogs} onChoosingDialog={this.props.onChoosingDialog} id={this.props.id} />
      </div>
    );
  }
  async getChats() {
    const dlgs = await this.props.getDialogs();
    console.log(dlgs !== this.state.dialogs)
    if (dlgs !== this.state.dialogs && Array.isArray(dlgs)) {
      this.setState({
        dialogs: dlgs
      })
    } else {
      console.log("Не удалось обновить")
    }
  }
  async refreshChats() {
    await this.getChats();
    setTimeout(await this.refreshChats, 10000000);
  }
}

export default Dialogs;