import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";
import { React, useEffect, useState } from "react";
import Budget from "./components/Budget";
import Header from "./components/Header";

function App() {
  const [transactions, setTransactions] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    Axios.get("http://localhost:8080/transactions")
      .then((response) => {
        if (response.data) {
          console.log(response.data._embedded.transactions);
          setTransactions(response.data._embedded.transactions);
        } else {
          console.log("what??");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else {
    return (
      <div>
        <Header isAuthenticated={isAuthenticated} user={user}></Header>
        {isAuthenticated && (
          <Budget user={user} transactions={transactions}></Budget>
        )}
      </div>
    );
  }
}

export default App;
