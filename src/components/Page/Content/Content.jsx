import React from 'react';
import classes from './Content.module.css';


let DUMMY_DATA = [
  {
    author: "dfhtrfh",
    content: "dgh",
  },
  {
    author: "dfhtrfh",
    content: "dgh",
  },
  {
    author: "dfhtrfh",
    content: "dgh",
  },
  {
    author: "dfhtrfh",
    content: "dgh",
  },
  {
    author: "dfhtrfh",
    content: "dgh",
  },
  {
    author: "dfhtrfh",
    content: "dgh",
  },
  {
    author: "dfhtrfh",
    content: "dgh",
  }
]

export async function getMessages() {
  console.log("111");
  const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/chats/getnewmessages', {
    method: 'POST',
    body: `{\"chat_id\":\"${chatID}\", \"last_id\":\"${lastID}\"}`
  });
  const data = await api_url.json();
  console.log(data);
  if (data) {
    DUMMY_DATA = data;
  }
}

let chatID = "1";
let lastID = "2";


async function refreshMessages() {
    getMessages();
    setTimeout(refreshMessages, 5000);
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
    refreshMessages();
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