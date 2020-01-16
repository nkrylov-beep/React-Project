import React from 'react';
import classes from './AddDialogPg.module.css';

class AddDialogPg extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            status: ""
        };
    }
    handleClick = async () => {
        this.state.status = await this.props.onCreateDlg(this.input.value);
        this.setState({
            status: this.state.status
        });
    }
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.text1}>Введите логин пользователя, которого хотите добавить</div>
                <div className={classes.input}>
                    <input
                        type='text'
                        ref={ref => this.input = ref} />
                </div>
                <div className={classes.but}>
                    <div className={classes.btn} onClick={this.handleClick}>готово</div>
                </div>
                <div className={classes.status}>{this.state.status}</div>
                <div className={classes.text2}>Можно ввести свой логин, если хотите писать самому себе</div>
            </div>
        );
    }
}

export default AddDialogPg;