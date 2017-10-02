import React, { Component } from 'react';
import {observer} from 'mobx-react';

class AddItem extends Component {

    render() {
        let props = this.props;
        let textBoxState = props.textBoxState;
        return (
            <div className="add-items">
                <div className="fun-text">
                    <p>We are creators, thinkers, listeners, and innovators.</p>
                    <p>But above all, <i className="doers">doers</i></p>
                    {/*<p><bold>_</bold></p>*/}
                </div>
            <form onSubmit={(e) => textBoxState.handleSubmit(e)}>
                <input className="add-box" value={textBoxState.text} onChange={(e) => textBoxState.handleChange(e)}/>

                <button className="submit-button" type="submit">+</button>
            </form>
                <img src="" alt=""/>
            </div>
        )
    };
}

export default observer(AddItem);