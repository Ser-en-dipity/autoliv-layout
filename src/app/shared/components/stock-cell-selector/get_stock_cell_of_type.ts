import { gql } from 'apollo-angular';

export const GET_ALL_STOCK_CELLS_OF_TYPE = gql`
  query GetAllStockCellsOfType($input: StockCellQueryInput) {
    core {
      stockCells(input: $input) {
        id
        code
        name
        type
      }
    }
  }
`;
