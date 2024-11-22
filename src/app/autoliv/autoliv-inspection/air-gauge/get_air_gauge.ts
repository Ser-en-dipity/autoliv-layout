import { gql } from 'apollo-angular';

export const GET_AIR_GAUGE = gql`
  query GetAirGauge($id: ID!) {
    core {
      product(id: $id) {
        airGauge
        {
          fileName
          url
        }
      }
    }
  }
`;