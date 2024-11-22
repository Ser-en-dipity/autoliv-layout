/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfiler
// ====================================================

export interface GetProfiler_core_product_profiler {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetProfiler_core_product {
  __typename: "Product";
  profiler: GetProfiler_core_product_profiler;
}

export interface GetProfiler_core {
  __typename: "Core";
  product: GetProfiler_core_product | null;
}

export interface GetProfiler {
  core: GetProfiler_core;
}

export interface GetProfilerVariables {
  id: string;
}
