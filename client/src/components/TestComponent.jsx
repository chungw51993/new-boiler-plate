import React, { Component } from 'react';

import TestContainer from './../containers/TestContainer';

import './../styles/test/test.scss';

class TestComponent extends Component {
  render() {
    const { test, actions } = this.props;
    const { testAction } = actions;
    return (
      <section id="test">
        <div>Check Redux</div>
        <div>{test.on}</div>
        <button onClick={() => testAction()}>Check</button>
      </section>
    );
  }
}

export default TestContainer(TestComponent);