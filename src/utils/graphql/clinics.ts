import { gql } from "graphql-request";

export const DENTIST_CATEGORY = gql`
  mutation {
    update_clinics(
      where: { category: { _eq: "Dentist" } }
      _set: { category: "Dentist" }
    ) {
      affected_rows
      returning {
        category
        location
        id
        name
      }
    }
  }
`;

export const FILTER_BY_LOCATION = gql`
  mutation ($location: String!) {
    update_clinics(
      where: { location: { _eq: $location } }
      _set: { location: $location }
    ) {
      affected_rows
      returning {
        id
        location
        name
        category
        price
      }
    }
  }
`;
