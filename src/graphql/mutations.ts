import { gql } from "graphql-request";

export const INSERT_USER_DETAILS = gql`
  mutation MyMutation(
    $authProvider: String
    $email: String
    $uid: String
    $displayName: String
  ) {
    insert_users(
      objects: {
        authProvider: $authProvider
        displayName: $displayName
        email: $email
        uid: $uid
      }
    ) {
      returning {
        authProvider
        displayName
        email
        uid
      }
    }
  }
`;

export const INSERT_USER = gql`
  mutation MyMutation(
    $authProvider: String
    $email: String
    $uid: String
    $displayName: String
  ) {
    insert_users(
      objects: {
        authProvider: $authProvider
        displayName: $displayName
        email: $email
        uid: $uid
      }
    ) {
      returning {
        authProvider
        displayName
        email
        uid
      }
    }
  }
`;
