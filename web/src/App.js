import React from "react";
import Signup from "./pages/signup";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:15780"
});

function App() {
  return (
    <div>
      Main
      <Signup client={client} />
    </div>
  );
}

export default App;
