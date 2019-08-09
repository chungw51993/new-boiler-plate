import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/app/app.scss';

import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <section id="app">
            <div className="header">Songmi and Won's Wedding</div>
            <div className="sub">IT'S OUR MFING WEDDING NIGGAS!</div>
            <div className="sub">THIS WEDDING IS GOING TO BE LITTY!!!!</div>
            <div className="sub">OPEN BAR, BYOD(Bring your own drug)</div>
            <div className="label">Enter your mfing email right here</div>
            <input />
            <div className="label">YOUR FING NAME</div>
            <input />
            <div className="label">How many mfs you bringing</div>
            <input />
            <div className="label">What you tryna eat</div>
            <input />
            <div className="footer">If you ain't planning on blacking out don't even show up</div>
          </section>
        </Router>
      </Provider>
    );
  }
}

export default App;
