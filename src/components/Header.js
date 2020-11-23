import React from "react";
import Login from "./Login";
import Container from "react-bootstrap/Container";

export default function Header(props) {
  console.log(props.user);
  return (
    <Container fluid>
      <h1>BrokerChunks</h1>
      <Login user={props.user} isAuthenticated={props.isAuthenticated}></Login>
    </Container>
  );
}
