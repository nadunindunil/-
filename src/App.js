import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
import initialState from './pages/initialState';
import MainApp from './pages/mainApp';

import './App.css';

const store = configureStore(initialState);
const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={customHistory}>
          <MainApp />
        </Router>
      </Provider>
    );
  }
}

export default App;
