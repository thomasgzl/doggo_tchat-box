import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient('https://unique-cricket-80.hasura.app/v1/graphql', {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'vVNSW26buQSGXyMRSs2HcFdZpSDO127dnh8ByOjZB8pFpCri6xot1FC9eoXebmSx'
  }
});