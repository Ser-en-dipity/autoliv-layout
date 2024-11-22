/**
 * ICNC.ERP.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Product } from './product';
import { WorkflowEntryMeta } from './workflowEntryMeta';


export interface WorkflowMeta { 
    id?: number;
    productId?: string | null;
    product?: Product;
    productCode?: string | null;
    productName?: string | null;
    entries?: Array<WorkflowEntryMeta> | null;
    deprecated?: boolean;
}

