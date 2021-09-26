import { QueryKey, useQuery, UseQueryResult } from "react-query";
import { graphQlClient } from "../../graphql/client";

export const useGqlQuery = <ResponseData = unknown, Variables = unknown>(
  queryKey: QueryKey,
  query: string,
  variables?: Variables
): UseQueryResult<ResponseData, Error> => {
  return useQuery(queryKey, async () => {
    try {
      const response = await graphQlClient.request(query, variables);
      return response;
    } catch (error) {
      console.log(`🚀 ~ useGqlQuery ~ error`, error);
    }
  });
};
