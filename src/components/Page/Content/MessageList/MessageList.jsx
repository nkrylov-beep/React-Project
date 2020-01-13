import React from 'react';
import classes from './MessageList.module.css';
import MsgItem from './MsgItem/MsgItem';

class MessageList extends React.Component {
  render() {
    refreshMessages();
    return (
        <ul className={classes.messagelist}>
          {this.props.messages.map(message => <MsgItem message={message} />)}
        </ul>
    )
  }
}

export default MessageList;


async function getMessages() {
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