import React from 'react';
import Item from './item';
import {observer} from 'mobx-react';

const ItemList = (props) => {
    // console.log('item_list', props.appState.tasks);
    // let taskItems = props.appState.tasks.map((task) => {
    //     return (
    //         <Item
    //             text={task.text}
    //             isDone={task.isDone}
    //             key={task.key}
    //         />
    //     );
    // });

    // const taskItems = () => {
    //     let tasks = props.appState.tasks;
    //     console.log("item_list :", tasks);
    //     tasks.forEach((key) => {
    //         return (
    //             <Item
    //                 text={tasks.get(key).text}
    //                 isDone={tasks[key].isDone}
    //                 key={tasks[key].id}
    //             />
    //         );
    //     }); --> when it was array

    let taskItems = props.appState.tasks.values().slice(0).reverse().map((task) => {
        return (
            <Item
                text={task.text}
                isDone={task.isDone}
                key={task.key}
                id={task.key}
            />
        )
    });

    return (
        /*<div>*/
            /*<div className="task title">*/
                /*<span className="span1">Status</span>*/
                /*<span className="span2">Task</span>*/
            /*</div>*/
            <ul className="item-list">
                {taskItems}
            </ul>
        // </div>
    );
};

export default observer(ItemList);