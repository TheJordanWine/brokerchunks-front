import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Login(props) {
  if (props.isAuthenticated) {
    return <LogoutButton user={props.user}></LogoutButton>;
  } else {
    return <LoginButton></LoginButton>;
  }
}
