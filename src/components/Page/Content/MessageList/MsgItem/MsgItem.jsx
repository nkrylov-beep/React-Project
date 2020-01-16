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
                    {`${this.props.message.author}  ${this.props.message.time}`}
                </div>
                <div>
                    {this.props.message.text}
                </div>
            </li>
        )
    }
}

export default MsgItem;