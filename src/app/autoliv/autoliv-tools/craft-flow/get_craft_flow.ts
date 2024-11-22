import { gql } from 'apollo-angular';

export const GET_CRAFT_FLOW = gql`
  query GetCraftFlow($id: ID!) {
    core {
      product(id: $id) {
        flowDoc {
            fileName
            url
        }
      }
    }
  }
`;