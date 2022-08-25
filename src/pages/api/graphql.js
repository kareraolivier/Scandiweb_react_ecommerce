// import { gql } from "graphql-tag";
import { gql } from "apollo-boost";

export const GET_CATEGORY = gql`
  query Category {
    categories {
      name
      products {
        id
        name
        description
        gallery
        category
      }
    }
  }
`;

export const SINGLE_PRODUCT = gql`
  query singeproduct($id: String!) {
    product(id: $id) {
      id
      name
      description
      gallery
      category
      brand
    }
  }
`;
