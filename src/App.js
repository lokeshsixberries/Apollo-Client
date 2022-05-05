import React from "react";
import Main from "./Components/Main";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useApolloClient,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://19ad-106-215-36-57.in.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </>
  );
}
