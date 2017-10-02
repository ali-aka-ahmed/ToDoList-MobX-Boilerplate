import React, { Component } from 'react';
import './App.css';
import ItemList from './components/itemList';
import AddItem from './components/addItem';
import {observer} from 'mobx-react';
import textBoxState from './stores/textBoxState';
import appState from './stores/appState';
import {Provider} from 'mobx-react';
// Look at MobX docs to see how to use Provider!

@observer
class App extends Component {

    render() {
        return (
            <div className="App">
                <AddItem textBoxState={textBoxState} />
                <ItemList appState={appState} />
            </div>
        );
    };
}

export default App;
