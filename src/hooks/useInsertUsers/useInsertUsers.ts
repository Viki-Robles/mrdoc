import { INSERT_USER } from "../../graphql/mutations";
import { useGqlMutation } from "../useGqlMutation/useGqlMutation";
import { UseMutationOptions, UseMutationResult } from "react-query";

interface Response {
  insert_users: {
    returning: {
      authProvider: string;
      displayName: string;
      email: string;
      uid: string;
    }[];
  };
}

interface UseInsertUserVariables {
  authProvider?: string;
  displayName: string;
  email: string;
  uid?: string;
}

export function useInsertUsers(
  variables?: UseMutationOptions<Response, Error, UseInsertUserVariables>,
): UseMutationResult<Response, Error, UseInsertUserVariables, unknown> {
  return useGqlMutation<Response, UseInsertUserVariables>(
    INSERT_USER,
    variables,
  );
}
