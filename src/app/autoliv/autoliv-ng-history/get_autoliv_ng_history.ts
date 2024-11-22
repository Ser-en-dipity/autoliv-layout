import { gql } from 'apollo-angular';

export const GET_AUTOLIV_NG_HISTORY_BY_ID = gql`
  query GetAutolivNgHistoryById($id: ID!
                      $ii: AutolivNgHistoryQueryInput!) {
    core {
      product(id: $id) {
        ngHistory(input: $ii)
        {
          machineCode
          workflowMetaId
          entryTime
          url
        }
      }
    }
  }
`;
