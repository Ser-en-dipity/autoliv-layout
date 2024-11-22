/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCraftFlow
// ====================================================

export interface GetCraftFlow_core_product_flowDoc {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetCraftFlow_core_product {
  __typename: "Product";
  flowDoc: GetCraftFlow_core_product_flowDoc;
}

export interface GetCraftFlow_core {
  __typename: "Core";
  product: GetCraftFlow_core_product | null;
}

export interface GetCraftFlow {
  core: GetCraftFlow_core;
}

export interface GetCraftFlowVariables {
  id: string;
}
