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

export const GET_EYE_CARE_DATA = gql`
  query {
    eyeCare {
      category
      location
      name
      price
      id
      treatment_id
    }
  }
`;

export const GET_DENTIST_DATA = gql`
  query {
    dentist {
      category
      location
      name
      price
      treatment_id
    }
  }
`;

export const GET_ROOT_CANAL_TREATMENT = gql`
  query {
    dentist(where: { category: { _eq: "Root Canal" } }) {
      location
      name
      price
      category
    }
  }
`;
