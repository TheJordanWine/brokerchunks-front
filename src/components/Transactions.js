import React, { Component } from "react";
import Transaction from "./Transaction";

export class transactions extends Component {
  render() {
    return this.props.transactions.map((transaction) => (
      <Transaction content={transaction.content}></Transaction>
    ));
  }
}

export default transactions;
