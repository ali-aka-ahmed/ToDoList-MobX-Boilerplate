import React from 'react';
import Item from './item';
import {observer} from 'mobx-react';

const ItemList = (props) => {
    // as there is no state here, try building a functional component

    // let taskItems = WE NEED TO MAP SOMETHING SUCH THAT ALL ITEMS IN THIS LIST TURN INTO THE COMPONENT BELOW
    //         <Item
    //             text={task.text}
    //             isDone={task.isDone}
    //             key={task.key}
    //             id={task.key}
    //         />

    return (
        <ul className="item-list">
            {/* What goes here.. think we want compiler to read some javascript variable, perhaps a list of components.. */}
        </ul>
    );
};

export default observer(ItemList);
// functional component - you put observer here