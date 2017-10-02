import React, {Component} from 'react';
import {inject} from 'mobx-react';
import {observer} from 'mobx-react';

@inject ("appState") @observer
class Item extends Component {
    markIsDone = () => {
        this.props.appState.changeIsDone(this.props.id);
    };

    deleteTask = () => {
        console.log(this.props);
        this.props.appState.deleteTask(this.props.id);
    };

    render() {
        return (
            <div className="task">
                <div className={this.props.isDone ? "text completed done" : "text completed notdone"} onClick={this.markIsDone}>
                    <div className={this.props.isDone ? "" : "appear"}> </div>
                    <p>{this.props.text}</p>
                    <div className="delete-icon" onClick={this.deleteTask}>
                        X
                    </div>
                </div>
            </div>
        )
    };
}

export default Item;