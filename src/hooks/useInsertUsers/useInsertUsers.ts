import { INSERT_USER_DETAILS } from "../../graphql/mutations";
import { useGqlMutation } from "../useGqlMutation/useGqlMutation";
import { UseMutationResult, useQueryClient } from "react-query";

interface User {
  authProvider: string;
  displayName: string;
  email: string;
  uid: string;
}

interface Response {
  insert_users: {
    returning: [
      {
        authProvider: string;
        displayName: string;
        email: string;
        uid: string;
      },
    ];
  };
}

interface UseInsertUsersVariables {
  objects: User[];
}

export const useInsertUsers = (): UseMutationResult<
  Response,
  Error,
  UseInsertUsersVariables,
  unknown
> => {
  const queryClient = useQueryClient();

  return useGqlMutation<Response, UseInsertUsersVariables>(
    INSERT_USER_DETAILS,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user-details");
      },
    },
  );
};
