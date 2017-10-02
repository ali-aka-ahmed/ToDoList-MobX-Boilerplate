import {observable} from 'mobx';
import appState from './Tasks';

class textBoxState {
    @observable text = '';

    handleChange = (e) => {
        this.text = e.target.value;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // let uuid = require('uuid/v4');
        if (this.text === '') {
            console.error('error');
            return
        }
        let new_task = {
            text: this.text,
            isDone: false,
            // key: uuid()
        };

        this.text = '';
        // console.log('create new_task :', new_task);
        appState.addTask(new_task);
    };

}

export default new textBoxState();