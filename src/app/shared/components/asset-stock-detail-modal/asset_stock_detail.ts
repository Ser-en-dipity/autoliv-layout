import { gql } from 'apollo-angular';

export const GET_BATCH_DETAIL_OF_ASSET = gql`
  query GetBatchDetailOfAsset($id: ID!) {
    core {
      product(id: $id) {
        id
        name
        aliases
        semis {
          id
          name
          code
          process
          processCode
          activeBatches {
            id
            serialNumber
            entryTime
            stockDetails {
              stockCell {
                name
                type
              }
              quantity
            }
          }
        }
        activeBatches {
          id
          serialNumber
          entryTime
          stockDetails {
            stockCell {
              name
              type
            }
            quantity
          }
        }
      }
    }
  }
`;
