import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/item_list';
import AddItem from './components/add_item';
import {observer} from 'mobx-react';
import textBoxState from './stores/TextBox';
import appState from './stores/Tasks';
import {Provider} from 'mobx-react';

@observer
class App extends Component {

    componentWillMount() {
      appState.initializeFromDatabase();
    }

    componentWillUnmount() {
        appState.removeFireRef();
    }

  render() {
    return (
        <Provider appState={appState}>
          <div className="App">
            {/*<div className="App-header">*/}
              {/*<img src={logo} className="App-logo" alt="logo"/>*/}
              {/*<h2>What To Do</h2>*/}
            {/*</div>*/}
            <AddItem textBoxState={textBoxState} />
            <ItemList appState={appState} />
          </div>
        </Provider>
    );
  };
}

export default App;
