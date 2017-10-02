import * as firebase from 'firebase';

///// TASKS - Deprecated
const TASKS = 'tasks';
export const getTasks = () => JSON.parse(sessionStorage.getItem(TASKS)) ? JSON.parse(sessionStorage.getItem(TASKS)) : [];
export const setTasks = (new_tasks) => sessionStorage.setItem(TASKS, JSON.stringify(new_tasks));

///// TASKS
let config = {
    apiKey: "AIzaSyDARxRPcDhqlrzn36-nKxAIQK6oVMGARao",
    authDomain: "todolist-f6394.firebaseapp.com",
    databaseURL: "https://todolist-f6394.firebaseio.com",
    projectId: "todolist-f6394",
    storageBucket: "todolist-f6394.appspot.com",
    messagingSenderId: "303468340463"
};

firebase.initializeApp(config);

const DATABASE = firebase.database();

export const setTaskFire = (task) => {
    let newRef = DATABASE.ref().push();
    newRef.set({
        text: task.text,
        isDone: task.isDone,
        key: newRef.key
    });
};

export const getTasksFire = () => DATABASE.ref('/').once('value').then((snapshot) => {
    let return_map = new Map();
    snapshot.forEach((childSnapshot) => {
        let item = childSnapshot.val();
        return_map.set(item.key, item);
    });
    if (return_map) {
        // console.log('dict item', return_dict);
        return return_map
    } else {
        return new Map()
    }
}).catch(err => console.error(err));

export const deleteTaskFire = (key) => DATABASE.ref(key + '/').remove().catch((err) => console.error(err));

export const updateIsDoneFire = (key) => DATABASE.ref(key + '/').once('value').then(snapshot => {
    snapshot.val() && DATABASE.ref(key + '/').update({isDone: !snapshot.val().isDone})
});

export const tasksRef = DATABASE.ref('/');