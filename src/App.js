import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { apolloClient } from "./graphql";
import Navbar from "./components/Navbar";
import rockets from "./components/Rockets";
import users from "./components/Users";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <div className="backgrounds">
          <Navbar />
          <Switch>
            <Route path="/" exact component={rockets} />
            <Route path="/usersPage" component={users} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}
