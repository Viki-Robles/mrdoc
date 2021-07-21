export {}; // import { UseQueryResult } from "react-query";
// import { GET_REQUIREMENTS } from "../../graphql/requirements";
// import { useUserContext } from "../../providers";
// import { Requirement } from "../../types/requirements";
// import { useGqlQuery } from "../useGqlQuery";

// interface Response {
//   requirement: Requirement[];
// }

// interface QueryVariables {
//   author_id: string;
// }

// /**
//  * @name useFetchRequirements
//  * @description fetch the RFP info for a given user
//  */
// export const useFetchRequirements = (): UseQueryResult<Response, Error> => {
//   const { user } = useUserContext();
//   return useGqlQuery<Response, QueryVariables>(
//     "requirements",
//     GET_REQUIREMENTS,
//     {
//       author_id: user?.id as string,
//     }
//   );
// };
