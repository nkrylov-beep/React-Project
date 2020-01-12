import React from 'react';
import classes from './MessageList.module.css';
import MsgItem from './MsgItem/MsgItem';

class MessageList extends React.Component {
  scrollToBottom = () => {
    this.el.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    refreshMessages();
    return (
      <div ref={el => { this.el = el; }}>
        <ul className={classes.messagelist}>
          {this.props.messages.map(message => <MsgItem message={message} />)}
        </ul>
      </div>
    )
  }
}

export default MessageList;


async function getMessages() {
  console.log("111");
  const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/chats/getnewmessages', {
    method: 'POST',
    body: `{\"chat_id\":\"${chatID}\", \"last_id\":\"${lastID}\"}`
  });
  const data = await api_url.json();
  console.log(data);
  if (Array.isArray(data)) {
    /*DUMMY_DATA = data;*/
  } else {

  }
}

let chatID = "1";
let lastID = "2";


async function refreshMessages() {
  getMessages();
  setTimeout(refreshMessages, 5000);
}