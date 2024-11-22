/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductInspection
// ====================================================

export interface GetProductInspection_core_product_productInspection {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetProductInspection_core_product {
  __typename: "Product";
  productInspection: GetProductInspection_core_product_productInspection;
}

export interface GetProductInspection_core {
  __typename: "Core";
  product: GetProductInspection_core_product | null;
}

export interface GetProductInspection {
  core: GetProductInspection_core;
}

export interface GetProductInspectionVariables {
  id: string;
}
