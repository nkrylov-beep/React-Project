import React from 'react';
import classes from './MessageList.module.css';
import MsgItem from './MsgItem/MsgItem';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgs: this.props.messages
    }
  }
  render() {
    this.refreshMessages();
    return (
      <ul className={classes.messagelist}>
        {this.state.msgs.map(message => <MsgItem message={message} />)}
      </ul>
    )
  }

  async getMessages() {
    this.state.msgs = await this.props.getMsgs();
    console.log(this.state.msgs)
    if (!this.state.msgs != [])
      this.setState({
        msgs: this.state.msgs
      });
  }

  async refreshMessages() {
    await this.getMessages();
    setTimeout(await this.refreshMessages, 100000);
  }
}

export default MessageList;

