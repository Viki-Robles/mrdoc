import { GraphQLClient } from 'graphql-request'

const endpoint = `https://mr-doc.hasura.app/v1/graphql`
export const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret':
      'Gs5lZnvxoZTjlHVLhZSm64JQsk6mOwoAuLUKQuEOcCX9BA4vx47N0EYuVRy0mv0C',
  },
})
