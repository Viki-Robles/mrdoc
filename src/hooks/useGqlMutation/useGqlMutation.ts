import { useMutation, UseMutationResult } from "react-query";
import { graphQlClient } from "../../graphql/client";

export const useGqlMutation = <Response = unknown, Variables = unknown>(
  variables,
  query,
): UseMutationResult<Response, Error, Variables, unknown> => {
  return useMutation(query, async () => {
    try {
      const response = await graphQlClient.request(query, variables);
      return response;
    } catch (error) {
      console.log(`🚀 ~ useGqlQMutation ~ error`, error);
    }
  });
};
