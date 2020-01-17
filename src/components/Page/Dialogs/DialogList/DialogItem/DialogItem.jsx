import React from 'react';
import classes from './DialogItem.module.css';


class DialogItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            status: this.props.dialogData.id,
            dlgName: ""
        }
    }
    async componentDidMount() {
        let id = this.props.id;
        this.props.dialogData.users.forEach(el => {
            if (!(el === this.props.id))
                id = el;
        });
        const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/users/publicdata', {
            method: 'POST',
            body: `{\"id\":\"${id}\"}`
        });
        const data = await api_url.json();
        if (!data.id) {
            console.log("Не удалось получить данные!?")
        }
        this.setState({ dlgName: data.nickname });
    }
    async handleClick(e) {
        await this.props.onChoosingDialog(this.state.status)
    }
    render() {
        return (
            <ul onClick={this.handleClick} key={this.props.dialogData.id} className={classes.dialog}>
                <div>
                    {this.state.dlgName}
                </div>
                <div>
                    <span className={classes.lastsenderId}>{this.props.dialogData.lastsenderId}</span> {this.props.dialogData.text}
                </div>
            </ul>
        );
    }
}


export default DialogItem;