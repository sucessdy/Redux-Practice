import React, { Component } from "react";

export default class OldCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    console.log("Constructing OldCounter");
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(document.getElementById("counter-title"));
  }

  render() {
    console.log("render");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>
        <button onClick={() => this.setState({ count: count - 1 })}> </button>
        <h2> {count}</h2>
      </div>
    );
  }
}
