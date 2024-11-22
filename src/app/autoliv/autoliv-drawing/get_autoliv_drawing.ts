import { gql } from 'apollo-angular';

export const GET_AUTOLIV_DRAWING_BY_ID = gql`
  query GetAutolivDrawingById($id: ID!) {
    core {
      product(id: $id) {
        craft
        {
          fileName
          url
        }
      }
    }
  }
`;
