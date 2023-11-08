import { INSERT_USER } from "../../graphql/mutations";
import { UserDetails, UserResponseData } from "../../types/users";
import { useGqlMutation } from "../useGqlMutation/useGqlMutation";
import { UseMutationOptions, UseMutationResult } from "react-query";

export function useInsertUsers(
  variables: UseMutationOptions<UserResponseData, Error, UserDetails>,
): UseMutationResult<UserResponseData, Error, UserDetails, unknown> {
  return useGqlMutation<UserResponseData, UserDetails>(variables, INSERT_USER);
}
