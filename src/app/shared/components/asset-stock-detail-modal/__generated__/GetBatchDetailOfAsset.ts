/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SEMI_PROCESS, STOCK_TYPE } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetBatchDetailOfAsset
// ====================================================

export interface GetBatchDetailOfAsset_core_product_semis_activeBatches_stockDetails_stockCell {
  __typename: "StockCell";
  name: string;
  type: STOCK_TYPE;
}

export interface GetBatchDetailOfAsset_core_product_semis_activeBatches_stockDetails {
  __typename: "BatchStockRecord";
  stockCell: GetBatchDetailOfAsset_core_product_semis_activeBatches_stockDetails_stockCell;
  quantity: any;
}

export interface GetBatchDetailOfAsset_core_product_semis_activeBatches {
  __typename: "Batch";
  id: string;
  serialNumber: string;
  entryTime: any;
  stockDetails: GetBatchDetailOfAsset_core_product_semis_activeBatches_stockDetails[] | null;
}

export interface GetBatchDetailOfAsset_core_product_semis {
  __typename: "SemiFinishedProduct";
  id: string;
  name: string;
  code: string;
  process: SEMI_PROCESS | null;
  processCode: string;
  /**
   * The active batches of the asset
   */
  activeBatches: (GetBatchDetailOfAsset_core_product_semis_activeBatches | null)[] | null;
}

export interface GetBatchDetailOfAsset_core_product_activeBatches_stockDetails_stockCell {
  __typename: "StockCell";
  name: string;
  type: STOCK_TYPE;
}

export interface GetBatchDetailOfAsset_core_product_activeBatches_stockDetails {
  __typename: "BatchStockRecord";
  stockCell: GetBatchDetailOfAsset_core_product_activeBatches_stockDetails_stockCell;
  quantity: any;
}

export interface GetBatchDetailOfAsset_core_product_activeBatches {
  __typename: "Batch";
  id: string;
  serialNumber: string;
  entryTime: any;
  stockDetails: GetBatchDetailOfAsset_core_product_activeBatches_stockDetails[] | null;
}

export interface GetBatchDetailOfAsset_core_product {
  __typename: "Product";
  id: string;
  name: string;
  aliases: string[];
  semis: GetBatchDetailOfAsset_core_product_semis[];
  /**
   * The active batches of the asset
   */
  activeBatches: (GetBatchDetailOfAsset_core_product_activeBatches | null)[] | null;
}

export interface GetBatchDetailOfAsset_core {
  __typename: "Core";
  product: GetBatchDetailOfAsset_core_product | null;
}

export interface GetBatchDetailOfAsset {
  core: GetBatchDetailOfAsset_core;
}

export interface GetBatchDetailOfAssetVariables {
  id: string;
}
