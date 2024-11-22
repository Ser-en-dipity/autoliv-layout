import { gql } from 'apollo-angular';

export const GET_PRODUCT_INSPECTION = gql`
  query GetProductInspection($id: ID!) {
    core {
      product(id: $id) {
        productInspection
        {
          fileName
          url
        }
      }
    }
  }
`;