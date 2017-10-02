import { observable } from 'mobx'
import { updateIsDoneFire, tasksRef, setTaskFire, getTasksFire, deleteTaskFire } from '../services/transport-layer.js'

class taskState {

    initializeFromDatabase = () => {
        // getTasksFire().then((tasks) => {
        //     this.tasks = tasks;
        //     // console.log('initialization:', this.tasks)
        // });
        tasksRef.orderByChild('date').on('value', snapshot => {
            let tasks = new Map();
            snapshot.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                tasks.set(item.key, item);
            });
            this.tasks = tasks;
        });
    };

    removeFireRef = () => {
        tasksRef.off();
    };

    @observable tasks = new Map();

    addTask = (dict) => {
        // let new_tasks = this.tasks;
        // new_tasks.push(dict);
        // setTasks(new_tasks);
        // this.tasks = new_tasks;
        // console.log('passed into Tasks store :', dict);
        setTaskFire(dict);
    };

    changeIsDone = (key)  => {
        updateIsDoneFire(key);
    };

    deleteTask = (key) => {
        // console.log('attempt deletion');
        deleteTaskFire(key);
    }
}

let appState =  new taskState();

export default appState;