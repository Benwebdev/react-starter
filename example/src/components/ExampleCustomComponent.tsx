import React, { Component } from 'react';

class ClassComponent extends Component {
  state: any; 
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      title: "ttt"
    };
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export const FunctionalComponent = props => (
  <div>
    <h1>Hello, {props.name}</h1>
  </div>
);

export default ClassComponent;