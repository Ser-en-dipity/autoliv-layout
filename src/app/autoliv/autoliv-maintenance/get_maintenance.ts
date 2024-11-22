import { gql } from 'apollo-angular';

export const GET_AUTOLIV_MAINTENANCE_BY_ID = gql`
  query GetAutolivMaintenanceById($id: ID!
                            $ii: AutolivDocQueryInput!) {
    core {
      product(id: $id) {
        maintenance(input: $ii)
        {
          machineCode
          entryTime
          url
        }
      }
    }
  }
`;


