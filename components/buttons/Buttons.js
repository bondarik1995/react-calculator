import React from 'react';

import { Button } from '../button';

export class Buttons extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      array: props.array,
      children: props.children,
    };
  }

  render() {
    const { array, children } = this.state;

    return (
      <div>
        {array.map((item, i) => {
          return (<Button key={i} changeValue={this.props.changeValue}>{item}</Button>)
        })}
      </div>
    );
  }
}
