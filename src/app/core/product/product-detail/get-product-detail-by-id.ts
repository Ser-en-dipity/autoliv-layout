import { gql } from 'apollo-angular';

export const GET_PRODUCT_DETAIL_BY_ID = gql`
  query GetProductDetailById($id: ID!) {
    core {
      product(id: $id) {
        code
        name
        aliases
        imageUrl
        heatTreatmentDescription
        finishDescription
        materialDescription
        flow
        workflowMetas {
          id
          deprecated
          entries {
            index
            internalPartNumber
            workflowEntryName
          }
        }
        
      }
    }
  }
`;

export const GET_INTERNAL_DRAWING_OF_PRODUCT = gql`
  query GetInternalDrawingOfProduct($id: ID!) {
    core {
      product(id: $id) {
        internalDrawing
        internal3dDrawing
      }
    }
  }
`;

export const GET_CUSTOMER_DRAWING_OF_PRODUCT = gql`
  query GetCustomerDrawingOfProduct($id: ID!) {
    core {
      product(id: $id) {
        customerDrawing
      }
    }
  }
`;

export const GET_BOMLIST_OF_PRODUCT = gql`
  query GetBomListOfProduct($id: ID!) {
    core {
      product(id: $id) {
        bomListUrl
      }
    }
  }
`;

export const GET_BOM = gql`
  query GetBom($id: ID!) {
    core {
      product(id: $id) {
        bomList {
          assetId
          asset {
            nickName
          }
          quantity
          expression
        }
      }
    }
  }
`;

export const GET_ALL_FILE_OF_PRODUCT = gql`
  query GetAllFileOfProduct($id: ID!) {
    core {
      product(id: $id) {
        toolPath
        ncDrawing
        processRecord
        productTesting
        ppapDrawing
        ngRecord
        icncFA
        customerFA
      }
    }
  }
`;