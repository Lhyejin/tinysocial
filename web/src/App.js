import React from 'react';
import Landing from './pages/landing';
import LoginForm from "./components/login-form";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:4000"
});

function App() {
  return (
      <div>
        Main
      </div>
  );
}

export default App;
