import React from 'react';
import classes from './Content.module.css';

const DUMMY_DATA = [
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
        <div className="app">
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
     </div>
      )
    }
  }

  class MessageList extends React.Component {
    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map(message => {
            return (
             <li key={message.id}>
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
  }
    handleChange(e) {
      this.setState({
        message: e.target.value
      })
    }
    render() {
      return (
        <form
          className="send-message-form">
          <input
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Type your message and hit ENTER"
            type="text" />
        </form>
      )
    }
  }