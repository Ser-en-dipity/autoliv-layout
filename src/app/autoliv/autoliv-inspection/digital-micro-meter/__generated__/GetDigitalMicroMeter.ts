/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDigitalMicroMeter
// ====================================================

export interface GetDigitalMicroMeter_core_product_digitalMicroMeter {
  __typename: "AutolivDoc";
  fileName: string;
  url: string | null;
}

export interface GetDigitalMicroMeter_core_product {
  __typename: "Product";
  digitalMicroMeter: GetDigitalMicroMeter_core_product_digitalMicroMeter;
}

export interface GetDigitalMicroMeter_core {
  __typename: "Core";
  product: GetDigitalMicroMeter_core_product | null;
}

export interface GetDigitalMicroMeter {
  core: GetDigitalMicroMeter_core;
}

export interface GetDigitalMicroMeterVariables {
  id: string;
}
