import { gql } from 'apollo-angular';

export const GET_AUTOLIV_SPOT_CHECK_INSTRUCTION = gql`
  query GetAutolivSpotCheckInstruction($id: ID!) {
    core {
      product(id: $id) {
        spotInstruction
        {
          fileName
          url
        }
      }
    }
  }
`;