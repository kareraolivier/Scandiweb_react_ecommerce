import { gql } from "graphql-tag";
// import { gql } from "apollo-boost";

export const GET_CATEGORY = gql`
  {
    categories {
      name
      products {
        id
        name
      }
    }
  }
`;
