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
import { WorkflowMeta } from './workflowMeta';


export interface WorkflowEntryMeta { 
    id?: number;
    workflowEntryName?: string | null;
    workflowMetaId?: number;
    workflowMeta?: WorkflowMeta;
    index?: number;
    internalPartNumber?: string | null;
    creationTime?: string;
}

