import React from 'react';
import classes from './AddDialog.module.css';
import { NavLink } from "react-router-dom";

class AddDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        let inscr;
        if (this.props.status == -1) inscr = "Cancel"
        else inscr = "Add Dialog"
        this.state = {
            status: this.props.status,
            inscr: inscr
        }
    }
    handleClick() {
        if (this.state.status == -1) {
            this.setState({
                status: null,
                inscr: "Cancel"
            });
            this.props.onChoosingDialog(this.state.status)
        }
        else {
            this.setState({
                status: -1,
                inscr: "Add Dialog"
            });
            this.props.onChoosingDialog(this.state.status)
        }
    }
    render() {
        return (
            <div className={classes.addDialBtn} onClick={this.handleClick}>{this.state.inscr}</div>
        );
    }
}

export default AddDialog;