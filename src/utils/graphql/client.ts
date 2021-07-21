import { GraphQLClient } from "graphql-request";

const endpoint = `https://mr-doc.hasura.app/v1/graphql`;
export const graphQlClient = new GraphQLClient(endpoint);
