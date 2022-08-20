import { ApolloClient } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

const localGraphQL = "ws://localhost:4000/graphql";

export const client = new ApolloClient({
  link: new WebSocketLink({ uri: localGraphQL }),
  cache: new InMemoryCache(),
});
