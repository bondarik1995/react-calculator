import React from 'react';

const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

export class Form extends React.Component {
  constructor() {
    super();
    
    this.state = {
      inputValue: '',
      errorMessage: '',
      saveValue: ''
    };

    this.change = this.change.bind(this);
    this.getResult = this.getResult.bind(this);
    this.clear = this.clear.bind(this);
    this.save = this.save.bind(this);
    this.load = this.load.bind(this);
    this.reset = this.reset.bind(this);
  }

  change(e) {
    e.preventDefault();
    this.setState({ inputValue: this.state.inputValue + e.target.textContent, errorMessage: '' });
  }

  getResult(e) {
    e.preventDefault();
    var inputValue = eval(this.state.inputValue);
    var errorMessage = '';
    if (inputValue === Infinity) {
      inputValue = '';
      errorMessage = 'На ноль делить нельзя';
    }
    this.setState({ inputValue, errorMessage });
  }

  clear(e) {
    e.preventDefault();
    this.setState({ inputValue: '', errorMessage: '' });
  }

  save(e) {
    e.preventDefault();
    this.setState({ saveValue: this.state.inputValue });
  }

  load(e) {
    e.preventDefault();
    this.setState({ inputValue: this.state.saveValue, errorMessage: '' });
  }

  reset(e) {
    e.preventDefault();
    this.setState({ inputValue: '', saveValue: '', errorMessage: '' });
  }

  render() {
    const { inputValue, saveValue, errorMessage } = this.state;

    return (
      <form action="">
        <input className="result-input" type="text" name="result" disabled="disabled" value={inputValue} />
        {(errorMessage !== '') ? errorMessage : ''}
        <div class="row-buttons">
          {numbers.map((item, i) => {
            return (<button key={i} className="btn" onClick={this.change}>{item}</button>)
          })}
        </div>
        <div class="row-buttons">
          <button className="btn" onClick={this.change}>+</button>
          <button className="btn" onClick={this.change}>-</button>
          <button className="btn" onClick={this.change}>/</button>
          <button className="btn" onClick={this.change}>*</button>
        </div>
        <div class="row-buttons">
          <button className="btn" onClick={this.clear}>C</button>
          <button className="btn" onClick={this.getResult}>=</button>
        </div>
        <div class="row-buttons">
          <button className="btn" onClick={this.save} disabled={(inputValue === '') ? 'disabled' : ''}>S</button>
          <button className="btn" onClick={this.reset} disabled={(saveValue === '') ? 'disabled' : ''}>R</button>
          <button className="btn" onClick={this.load} disabled={(saveValue === '') ? 'disabled' : ''}>L</button>
        </div>
      </form>
    );
  }
}
