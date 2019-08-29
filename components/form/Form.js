import React from 'react';

import { Buttons } from '../buttons';

const operations = ['+', '-', '/', '*'];
const numbers = [];
for (let i = 1; i < 10; i++) {
  numbers.push(i);
}
const resultButtons = ['C', '=', 'S'];

export class Form extends React.Component {
  constructor() {
    super();
    
    this.state = {
      inputValue: '',
    };

    this.change = this.change.bind(this);
  }

  change(value) {
    this.setState({ inputValue: this.state.inputValue + value });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <form action="">
        <input type="text" name="result" disabled="disabled" value={inputValue} />
        <Buttons array={numbers} changeValue={this.change} />
        <Buttons array={operations} changeValue={this.change} />
        <Buttons array={resultButtons} changeValue={this.change} />
      </form>
    );
  }
}
