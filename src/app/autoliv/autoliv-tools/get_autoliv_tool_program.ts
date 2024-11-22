import { gql } from 'apollo-angular';

export const GET_AUTOLIV_TOOL_PROGRAM = gql`
  query GetAutolivToolProgram($id: ID!) {
    core {
      product(id: $id) {
        programs {
          url
          programCode
          entryTime
        }
      }
    }
  }
`;