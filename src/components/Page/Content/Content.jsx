import React from 'react';
import classes from './Content.module.css';

let DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "Brazil!"
  }
]

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
                {message.senderId}
              </div>
              <div>
                {message.text}
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
    DUMMY_DATA.push({senderId: "Alex", text: (this.state.message)})
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