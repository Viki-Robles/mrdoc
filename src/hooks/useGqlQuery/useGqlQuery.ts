export {}; // import { QueryKey, useQuery, UseQueryResult } from "react-query";
// import { graphQlClient } from "../../utils/graphql/client";

// /**
//  * @name useGqlQuery
//  * @description a helper hook that should be used when calling the GraphQL API
//  */

// export const useGqlQuery = <Response = unknown, Variables = unknown>(
//   queryKey: QueryKey,
//   query: string,
//   variables?: Variables
// ): UseQueryResult<Response, Error> => {
//   return useQuery(
//     queryKey,
//     async () => {
//       const response = await graphQlClient.request(query, variables, {
//         Authorization: `Bearer ${idToken}`,
//       });
//       console.log(`🚀 ~ response`, response);
//       return response;
//     },
//     {
//       enabled: !!idToken,
//     }
//   );
// };
