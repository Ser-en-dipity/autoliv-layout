/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetInspectionRecordById
// ====================================================

export interface GetInspectionRecordById_core_product_inspectorChecks {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetInspectionRecordById_core_product {
  __typename: "Product";
  inspectorChecks: (GetInspectionRecordById_core_product_inspectorChecks | null)[] | null;
}

export interface GetInspectionRecordById_core {
  __typename: "Core";
  product: GetInspectionRecordById_core_product | null;
}

export interface GetInspectionRecordById {
  core: GetInspectionRecordById_core;
}

export interface GetInspectionRecordByIdVariables {
  id: string;
}
