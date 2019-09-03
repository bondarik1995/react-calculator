import React, { Component } from 'react';
import { render } from 'react-dom';

import { Form } from './components/form';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
