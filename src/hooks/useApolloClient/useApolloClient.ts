import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";

export const useApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://mr-doc.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret":
          "Gs5lZnvxoZTjlHVLhZSm64JQsk6mOwoAuLUKQuEOcCX9BA4vx47N0EYuVRy0mv0C",
      },
    }),
    cache: new InMemoryCache(),
  });
};
