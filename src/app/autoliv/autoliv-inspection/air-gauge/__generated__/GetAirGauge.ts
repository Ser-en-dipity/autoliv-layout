/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAirGauge
// ====================================================

export interface GetAirGauge_core_product_airGauge {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetAirGauge_core_product {
  __typename: "Product";
  airGauge: GetAirGauge_core_product_airGauge;
}

export interface GetAirGauge_core {
  __typename: "Core";
  product: GetAirGauge_core_product | null;
}

export interface GetAirGauge {
  core: GetAirGauge_core;
}

export interface GetAirGaugeVariables {
  id: string;
}
