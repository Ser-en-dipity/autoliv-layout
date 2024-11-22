/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AutolivDocQueryInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetAutolivInspectExceptionById
// ====================================================

export interface GetAutolivInspectExceptionById_core_product_inspectException {
  __typename: "AutolivDoc";
  machineCode: string | null;
  entryTime: any;
  url: string | null;
}

export interface GetAutolivInspectExceptionById_core_product {
  __typename: "Product";
  inspectException: (GetAutolivInspectExceptionById_core_product_inspectException | null)[] | null;
}

export interface GetAutolivInspectExceptionById_core {
  __typename: "Core";
  product: GetAutolivInspectExceptionById_core_product | null;
}

export interface GetAutolivInspectExceptionById {
  core: GetAutolivInspectExceptionById_core;
}

export interface GetAutolivInspectExceptionByIdVariables {
  id: string;
  ii: AutolivDocQueryInput;
}
