import { gql } from 'apollo-angular';

export const GET_DIGITAL_MICRO_METER = gql`
  query GetDigitalMicroMeter($id: ID!) {
    core {
      product(id: $id) {
        digitalMicroMeter
        {
          fileName
          url
        }
      }
    }
  }
`;