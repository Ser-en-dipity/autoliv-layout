import { gql } from 'apollo-angular';

export const GET_INSPECTOR_CHECK_RECORD = gql`
  query GetInspectorCheckRecord($id: ID!) {
    core {
      product(id: $id) {
        inspectorCheck
        {
          fileName
          url
        }
      }
    }
  }
`;