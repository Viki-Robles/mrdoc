import { INSERT_USER } from "../../graphql/mutations";
import { User } from "../../types/users";
import { useGqlMutation } from "../useGqlMutation/useGqlMutation";
import { UseMutationOptions, UseMutationResult } from "react-query";

interface Response {
  users: User[];
}

interface UseUserVariables {
  authProvider?: string;
  displayName: string;
  email: string;
  uid?: string;
}

export function useInsertUsers(
  variables?: UseMutationOptions<Response, Error, UseUserVariables>,
): UseMutationResult<Response, Error, UseUserVariables, unknown> {
  return useGqlMutation<Response, UseUserVariables>(INSERT_USER, variables);
}
