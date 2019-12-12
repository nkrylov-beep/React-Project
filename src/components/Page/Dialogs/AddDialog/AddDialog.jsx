import React from 'react';
import classes from './AddDialog.module.css';
import { NavLink } from "react-router-dom";

class AddDialog extends React.Component {
    render() {
        return (
            <div className={classes.class}>
                <NavLink to="/page" className={classes.addDialBtn}>Add dialog</NavLink>
            </div>
        );
    }
}

export default AddDialog;