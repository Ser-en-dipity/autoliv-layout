/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetToolBomDoc
// ====================================================

export interface GetToolBomDoc_core_product_toolBom {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetToolBomDoc_core_product {
  __typename: "Product";
  toolBom: GetToolBomDoc_core_product_toolBom;
}

export interface GetToolBomDoc_core {
  __typename: "Core";
  product: GetToolBomDoc_core_product | null;
}

export interface GetToolBomDoc {
  core: GetToolBomDoc_core;
}

export interface GetToolBomDocVariables {
  id: string;
}
