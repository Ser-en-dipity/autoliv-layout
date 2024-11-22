/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjector
// ====================================================

export interface GetProjector_core_product_projector {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetProjector_core_product {
  __typename: "Product";
  projector: GetProjector_core_product_projector;
}

export interface GetProjector_core {
  __typename: "Core";
  product: GetProjector_core_product | null;
}

export interface GetProjector {
  core: GetProjector_core;
}

export interface GetProjectorVariables {
  id: string;
}
