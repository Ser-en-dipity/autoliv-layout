import { gql } from 'apollo-angular';

export const GET_AUTOLIV_INSPECT_EXCEPTION_BY_ID = gql`
  query GetAutolivInspectExceptionById($id: ID!
                      $ii: AutolivDocQueryInput!) {
    core {
      product(id: $id) {
        inspectException(input: $ii)
        {
          machineCode
          entryTime
          url
        }
      }
    }
  }
`;