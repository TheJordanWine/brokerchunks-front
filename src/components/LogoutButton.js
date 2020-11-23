import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row } from "react-bootstrap";

const LogoutButton = (props) => {
  const { logout } = useAuth0();

  return (
    <Row>
      <Col>
        <img src={props.user.picture} alt={props.user.name} />
      </Col>
      <Col>{props.user.name}</Col>
      <Col>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      </Col>
    </Row>
  );
};

export default LogoutButton;
