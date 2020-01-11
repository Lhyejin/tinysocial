import React from "react";
import Signup from "./pages/signup";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:15780"
});

function App() {
  return (
    <div>
      <BrowserRouter path="/">
        <Signup client={client} />
      </BrowserRouter>
    </div>
  );
}

export default App;
