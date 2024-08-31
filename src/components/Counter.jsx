import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,

     
    };
    console.log("hello, mount")

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((preState) => ({
      count: preState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <p> Counter : {this.state.count}  </p>

        <button onClick={this.handleClick}> Increment </button>
      </div>
    );
  }
}
