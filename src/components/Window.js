import React, { Component } from "react";
import Transactions from "./Transactions";

export class Window extends Component {
  state = {
    transactions: [
      {
        content: "test123",
      },
      {
        content: "test456",
      },
    ],
  };
  render() {
    return (
      <div>
        <Transactions transactions={this.state.transactions}></Transactions>
      </div>
    );
  }
}

export default Window;
