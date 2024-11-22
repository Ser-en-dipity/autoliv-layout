import { gql } from 'apollo-angular';

export const GET_TOOL_BOM_DOC = gql`
  query GetToolBomDoc($id: ID!) {
    core {
      product(id: $id) {
        toolBom {
            fileName
            url
        }
      }
    }
  }
`;