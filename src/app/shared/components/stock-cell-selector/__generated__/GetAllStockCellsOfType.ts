/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StockCellQueryInput, STOCK_TYPE } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetAllStockCellsOfType
// ====================================================

export interface GetAllStockCellsOfType_core_stockCells {
  __typename: "StockCell";
  id: string;
  code: string;
  name: string;
  type: STOCK_TYPE;
}

export interface GetAllStockCellsOfType_core {
  __typename: "Core";
  stockCells: (GetAllStockCellsOfType_core_stockCells | null)[] | null;
}

export interface GetAllStockCellsOfType {
  core: GetAllStockCellsOfType_core;
}

export interface GetAllStockCellsOfTypeVariables {
  input?: StockCellQueryInput | null;
}
