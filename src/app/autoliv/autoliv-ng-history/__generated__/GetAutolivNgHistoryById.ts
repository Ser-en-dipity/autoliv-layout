/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AutolivNgHistoryQueryInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetAutolivNgHistoryById
// ====================================================

export interface GetAutolivNgHistoryById_core_product_ngHistory {
  __typename: "AutolivDoc";
  machineCode: string | null;
  workflowMetaId: any | null;
  entryTime: any;
  url: string | null;
}

export interface GetAutolivNgHistoryById_core_product {
  __typename: "Product";
  ngHistory: (GetAutolivNgHistoryById_core_product_ngHistory | null)[] | null;
}

export interface GetAutolivNgHistoryById_core {
  __typename: "Core";
  product: GetAutolivNgHistoryById_core_product | null;
}

export interface GetAutolivNgHistoryById {
  core: GetAutolivNgHistoryById_core;
}

export interface GetAutolivNgHistoryByIdVariables {
  id: string;
  ii: AutolivNgHistoryQueryInput;
}
