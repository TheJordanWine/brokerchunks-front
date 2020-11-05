import React, { Component } from "react";

export class Transaction extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

export default Transaction;
