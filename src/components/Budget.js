import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./LogoutButton";

export default function Budget(props) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <h1> Budget Time!</h1>
        <img src={props.user.picture} alt={props.user.name} />
        <h2>{props.user.name}</h2>
        <p>{props.user.email}</p>
        <LogoutButton></LogoutButton>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Woa, how did you get here???</h1>
      </div>
    );
  }
}
