import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import TestComponent from './components/TestComponent.jsx';

import './styles/app/app.scss';

import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <section id="app">
            <header>React Boiler Plate is LIVE</header>
            <Switch>
              <Route exact route="/" component={TestComponent} />
            </Switch>
          </section>
        </Router>
      </Provider>
    );
  }
}

export default App;
