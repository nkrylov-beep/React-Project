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
  render() {
    return (
      <div className={classes.content}>
        <MessageList messages={this.state.messages} />
        <SendMessageForm onRefreshMessageList={this.props.onRefreshMessageList} />
      </div>
    )
  }
}

export default Content;