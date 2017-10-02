import { observable } from 'mobx'

class AppState {

    tasks = [];
    // what MobX tag do you need here (hint it's imported). Why do you want to mark this as observable?
    // Do you always mark your variables as observable?
    // Is an array the best option? Recommended: Look at MobX docs and make miniStore (see 'the perfect data model' or linked slides in README)

    addTask = (dict) => {
        // fill in
    };

    changeIsDone = (key)  => {
        // fill in
    };

    deleteTask = (key) => {
        // fill in
    }
}

export default new AppState();