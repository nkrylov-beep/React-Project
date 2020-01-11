import React from 'react';
import classes from './DialogItem.module.css';


class DialogItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            status: 1
        }
    }
    handleClick(e) {
        e.preventDefault();
        this.props.onChoosingDialog(this.state.status)
    }
    render() {
        return (
            <ul onClick={this.handleClick} key={this.props.dialogData.id} className={classes.dialog}>
                <div>
                    {this.props.dialogData.dialogId}
                </div>
                <div>
                    <span className={classes.lastsenderId}>{this.props.dialogData.lastsenderId}</span>: {this.props.dialogData.text}
                </div>
            </ul>
        );
    }
}


export default DialogItem;