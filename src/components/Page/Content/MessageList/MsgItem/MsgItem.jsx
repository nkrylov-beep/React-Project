import React from 'react';
import classes from './MsgItem.module.css';


class MsgItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
        }
    }
    handleClick(e) {
        e.preventDefault();
    }
    render() {
        return (
            <li key={this.props.message.id} className={classes.message}>
                <div>
                    {`${this.props.message.author}  ${(new Date(this.props.message.time)).format('dd mm hh:MM')}`}
                </div>
                <div>
                    {this.props.message.content}
                </div>
            </li>
        )
    }
}

export default MsgItem;

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