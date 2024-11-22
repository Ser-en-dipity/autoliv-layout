import { gql } from 'apollo-angular';

export const GET_PROJECTOR = gql`
  query GetProjector($id: ID!) {
    core {
      product(id: $id) {
        projector
        {
          fileName
          url
        }
      }
    }
  }
`;