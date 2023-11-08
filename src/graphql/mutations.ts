import { gql } from "graphql-request";

export const INSERT_USER = gql`
  mutation MyMutation(
    $email: String!
    $displayName: String
    $password: String
    $repeatPassword: String
  ) {
    insert_users(
      objects: {
        displayName: $displayName
        email: $email
        password: $password
        repeatPassword: $repeatPassword
      }
    ) {
      returning {
        displayName
        email
        password
        repeatPassword
      }
    }
  }
`;
