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
        email: $email
        displayName: $displayName
        password: $password
        repeatPassword: $repeatPassword
      }
    ) {
      returning {
        email
        displayName
        password
        repeatPassword
      }
    }
  }
`;
