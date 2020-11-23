import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Auth0Provider
    domain="drchunks.us.auth0.com"
    clientId="25TjkMABjimG2qduSSXVthnz5l1hHp58"
    redirectUri={window.location.origin}
    audience="http://localhost:8080"
    scope="read:accounts"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
