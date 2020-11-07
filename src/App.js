import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Login from "./components/Login";
import Budget from "./components/Budget";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? <Budget user={user}></Budget> : <Login></Login>;
}

export default App;
