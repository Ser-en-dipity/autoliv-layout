import { gql } from 'apollo-angular';

export const GET_PROFILER = gql`
  query GetProfiler($id: ID!) {
    core {
      product(id: $id) {
        profiler
        {
          fileName
          url
        }
      }
    }
  }
`;