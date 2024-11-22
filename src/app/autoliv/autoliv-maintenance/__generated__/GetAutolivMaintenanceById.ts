/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AutolivDocQueryInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetAutolivMaintenanceById
// ====================================================

export interface GetAutolivMaintenanceById_core_product_maintenance {
  __typename: "AutolivDoc";
  machineCode: string | null;
  entryTime: any;
  url: string | null;
}

export interface GetAutolivMaintenanceById_core_product {
  __typename: "Product";
  maintenance: (GetAutolivMaintenanceById_core_product_maintenance | null)[] | null;
}

export interface GetAutolivMaintenanceById_core {
  __typename: "Core";
  product: GetAutolivMaintenanceById_core_product | null;
}

export interface GetAutolivMaintenanceById {
  core: GetAutolivMaintenanceById_core;
}

export interface GetAutolivMaintenanceByIdVariables {
  id: string;
  ii: AutolivDocQueryInput;
}
