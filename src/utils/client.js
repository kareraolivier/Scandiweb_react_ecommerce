import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const localGraphQL = "http://localhost:4000/graphql";

export const client = new ApolloClient({
  link: new createHttpLink({ uri: localGraphQL }),
  cache: new InMemoryCache(),
});
