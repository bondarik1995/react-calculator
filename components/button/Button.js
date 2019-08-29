import React from 'react';

import './style.css';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: props.value,
      children: props.children,
    };

    this.input = this.input.bind(this);
  }

  input(e) {
    e.preventDefault();
    this.props.changeValue(e.target.textContent);
    //this.setState({count: this.state.count - 1});
  }

  render() {
    const { children } = this.state;

    return (
      <button className="btn" onClick={this.input}>
        {children}
      </button>
    );
  }
}
