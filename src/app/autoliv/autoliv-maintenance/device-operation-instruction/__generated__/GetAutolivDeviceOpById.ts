/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAutolivDeviceOpById
// ====================================================

export interface GetAutolivDeviceOpById_core_product_deviceOp {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetAutolivDeviceOpById_core_product {
  __typename: "Product";
  deviceOp: GetAutolivDeviceOpById_core_product_deviceOp;
}

export interface GetAutolivDeviceOpById_core {
  __typename: "Core";
  product: GetAutolivDeviceOpById_core_product | null;
}

export interface GetAutolivDeviceOpById {
  core: GetAutolivDeviceOpById_core;
}

export interface GetAutolivDeviceOpByIdVariables {
  id: string;
}
