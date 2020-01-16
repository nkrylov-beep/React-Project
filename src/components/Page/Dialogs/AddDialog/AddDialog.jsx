import React from 'react';
import classes from './AddDialog.module.css';
import { NavLink } from "react-router-dom";

class AddDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        let text;
        this.state = {
        }
    }
    handleClick() {
        this.props.onChoosingDialog(-1);
    }
    render() {
        return (
            <div className={classes.addDialBtn} onClick={this.handleClick}>{this.props.inscr}</div>
        );
    }
}

export default AddDialog;