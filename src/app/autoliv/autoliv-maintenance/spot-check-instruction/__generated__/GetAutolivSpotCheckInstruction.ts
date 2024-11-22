/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAutolivSpotCheckInstruction
// ====================================================

export interface GetAutolivSpotCheckInstruction_core_product_spotInstruction {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetAutolivSpotCheckInstruction_core_product {
  __typename: "Product";
  spotInstruction: GetAutolivSpotCheckInstruction_core_product_spotInstruction;
}

export interface GetAutolivSpotCheckInstruction_core {
  __typename: "Core";
  product: GetAutolivSpotCheckInstruction_core_product | null;
}

export interface GetAutolivSpotCheckInstruction {
  core: GetAutolivSpotCheckInstruction_core;
}

export interface GetAutolivSpotCheckInstructionVariables {
  id: string;
}
