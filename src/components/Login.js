import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Login() {
  return (
    <div>
      <h1> Heya! Welcome to BrokerChunks!</h1>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </div>
  );
}
