import React from 'react';
import classes from './Content.module.css';
import MessageList from './MessageList/MessageList';
import SendMessageForm from './SendMessageForm/SendMessageForm';


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.msgs
    };
  }
  refreshMessageList = (message) => {
    this.state.messages.push(message)
    this.setState({
      messages: this.state.messages
    });
  }
  render() {
    return (
      <div className={classes.content}>
        <MessageList messages={this.state.messages} />
        <SendMessageForm onRefreshMessageList={this.refreshMessageList} />
      </div>
    )
  }
}

export default Content;