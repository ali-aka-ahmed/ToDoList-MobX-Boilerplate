import React from 'react';
import { observer } from 'mobx-react';

const AddItem = (props) => {

    return (
        <div className="add-items">

            <div className="fun-text">
                <p>We are creators, thinkers, listeners, and innovators.</p>
                <p>But above all, <i className="doers">doers</i></p>
            </div>

            {/* I used a form element here - there are better ways to do textboxes. The most popular is to import a third party
             custom component which has it's own event handlers. Look at libraries like Antd and Material UI. */}
            <form onSubmit={{/*SOMETHING_HERE*/}}>
                <input className="add-box" value={{/*SOMETHING_HERE*/}} onChange={{/*SOMETHING_HERE*/}}/>
                <button className="submit-button" type="submit">+</button>
            </form>

        </div>
    )
};

export default observer(AddItem);
// in functional (stateless) components, you add the MobX observer here, when exporting the function. You cannot use decorators.