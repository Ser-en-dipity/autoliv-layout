/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetInspectorCheckRecord
// ====================================================

export interface GetInspectorCheckRecord_core_product_inspectorCheck {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetInspectorCheckRecord_core_product {
  __typename: "Product";
  inspectorCheck: GetInspectorCheckRecord_core_product_inspectorCheck;
}

export interface GetInspectorCheckRecord_core {
  __typename: "Core";
  product: GetInspectorCheckRecord_core_product | null;
}

export interface GetInspectorCheckRecord {
  core: GetInspectorCheckRecord_core;
}

export interface GetInspectorCheckRecordVariables {
  id: string;
}
