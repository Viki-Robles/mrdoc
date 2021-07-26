import { gql } from "graphql-request";

export const GET_TREATMENTS = gql`
  query {
    dentist(where: { category: { _eq: "Root Canal" } }) {
      category
      location
      name
      price
    }
    eyeCare(where: { category: { _eq: "Cataract Surgery" } }) {
      category
      location
      name
      price
    }
  }
`;

export const GET_EY_CARE = gql`
  query {
    eyeCare {
      category
      location
      name
      price
    }
  }
`;

export const GET_DENTIST = gql`
  query {
    dentist {
      category
      location
      name
      price
    }
  }
`;
