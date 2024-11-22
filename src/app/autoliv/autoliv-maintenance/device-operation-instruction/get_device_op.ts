import { gql } from 'apollo-angular';

export const GET_AUTOLIV_DEVICE_OP_BY_ID = gql`
  query GetAutolivDeviceOpById($id: ID!) {
    core {
      product(id: $id) {
        deviceOp
        {
          fileName
          url
        }
      }
    }
  }
`;