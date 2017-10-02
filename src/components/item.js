import React, {Component} from 'react';
import {inject} from 'mobx-react';
import {observer} from 'mobx-react';

// Look this up - we're going to use the Provider syntax here to get appState. Very important to learn this.
@inject ("appState") @observer
class Item extends Component {
    markIsDone = () => {
        // fill in
    };

    deleteTask = () => {
        // fill in
    };

    render() {
        return (
            <div className="task">

                {/* this is a popular way of changing styling - depending on a boolean value, you can change the class name */}
                <div className={this.props.isDone ? "text completed done" : "text completed notdone"} onClick={{/*SOMETHING_HERE: HINT THE FUNCTION IS ABOVE.. OR YOU COULD DIRECTLY IMPORT FUNCTION FROM STORE AND CALL IT HERE */}}>
                    <p>{this.props.text}</p>
                    <div className="delete-icon" onClick={{/*SOMETHING_HERE: HINT THE FUNCTION IS ABOVE OR YOU COULD CALL THE FUNCTION FROM THE STORE AND PUT IT HERE */}}>
                        X
                    </div>
                    {/* Note in the event handler onClick, I don't have to write onClick={() => this.deleteTask()}. ES6 allows me to write
                     onClick={this.deleteTask} and the compiler will understand what I mean */}
                </div>

            </div>
        )
    };
}

export default Item;