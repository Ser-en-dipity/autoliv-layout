/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductDetailById
// ====================================================

export interface GetProductDetailById_core_product_workflowMetas_entries {
  __typename: "WorkflowEntryMeta";
  index: number;
  internalPartNumber: string;
  workflowEntryName: string;
}

export interface GetProductDetailById_core_product_workflowMetas {
  __typename: "WorkflowMeta";
  id: any;
  deprecated: boolean;
  /**
   * Entries of this workflow meta
   */
  entries: (GetProductDetailById_core_product_workflowMetas_entries | null)[] | null;
}

export interface GetProductDetailById_core_product {
  __typename: "Product";
  code: string;
  name: string;
  aliases: string[];
  imageUrl: string | null;
  heatTreatmentDescription: string | null;
  finishDescription: string | null;
  materialDescription: string | null;
  flow: string;
  workflowMetas: (GetProductDetailById_core_product_workflowMetas | null)[] | null;
}

export interface GetProductDetailById_core {
  __typename: "Core";
  product: GetProductDetailById_core_product | null;
}

export interface GetProductDetailById {
  core: GetProductDetailById_core;
}

export interface GetProductDetailByIdVariables {
  id: string;
}
