/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAutolivToolProgram
// ====================================================

export interface GetAutolivToolProgram_core_product_programs {
  __typename: "AutolivDoc";
  url: string | null;
  programCode: string | null;
  entryTime: any;
}

export interface GetAutolivToolProgram_core_product {
  __typename: "Product";
  programs: (GetAutolivToolProgram_core_product_programs | null)[] | null;
}

export interface GetAutolivToolProgram_core {
  __typename: "Core";
  product: GetAutolivToolProgram_core_product | null;
}

export interface GetAutolivToolProgram {
  core: GetAutolivToolProgram_core;
}

export interface GetAutolivToolProgramVariables {
  id: string;
}
