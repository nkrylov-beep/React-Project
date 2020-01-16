import React from 'react';
import classes from './SendMessageForm.module.css';


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
    this.setState({
      message: ''
    })
    this.props.onRefreshMessageList({ author: "Alex", text: this.state.message, time: (new Date()).format('dd mm hh:MM') })
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

export default SendMessageForm;



Date.prototype.format = function (format = 'yyyy-mm-dd') {
  const replaces = {
    yyyy: this.getFullYear(),
    mm: MONTHS[this.getMonth()],
    dd: ('0' + this.getDate()).slice(-2),
    hh: ('0' + this.getHours()).slice(-2),
    MM: ('0' + this.getMinutes()).slice(-2),
    ss: ('0' + this.getSeconds()).slice(-2)
  };
  let result = format;
  for (const replace in replaces) {
    result = result.replace(replace, replaces[replace]);
  }
  return result;
};

const MONTHS = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]