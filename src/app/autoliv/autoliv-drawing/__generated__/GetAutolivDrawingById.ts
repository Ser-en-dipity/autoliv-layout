/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAutolivDrawingById
// ====================================================

export interface GetAutolivDrawingById_core_product_craft {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetAutolivDrawingById_core_product {
  __typename: "Product";
  craft: GetAutolivDrawingById_core_product_craft;
}

export interface GetAutolivDrawingById_core {
  __typename: "Core";
  product: GetAutolivDrawingById_core_product | null;
}

export interface GetAutolivDrawingById {
  core: GetAutolivDrawingById_core;
}

export interface GetAutolivDrawingByIdVariables {
  id: string;
}
