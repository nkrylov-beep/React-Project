import React from 'react';
import classes from './Content.module.css';



export async function getMessages(e) {
  e.preventDefault();
  console.log("111");
  const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/chats/getnewmessages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: `{\"chat_id\":\"${chatID}\", \"new_login\":\"${lastID}\"}`
  });
  const data = await api_url.json();
  console.log(data);
  if (data) {
    DUMMY_DATA = data;
  }
  setTimeout(getMessages, 5000);
}

let DUMMY_DATA = [
]

let chatID = "1";
let lastID = "-1";


async function refreshMessages() {
  while (true) {
    
    getMessages();
  }
}




export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: DUMMY_DATA
    };
  }
  render() {
    return (
      <div className={classes.content}>
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    )
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul className={classes.messagelist}>
       
        {this.props.messages.map(message => {
          return (
            <li key={message.id} className={classes.message}>
              <div>
                {message.author}
              </div>
              <div>
                {message.content}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

class SendMessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    DUMMY_DATA.push({ author: "Alex", content: (this.state.message) })
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={classes.sendmessageform}>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text" />
      </form>
    )
  }
}