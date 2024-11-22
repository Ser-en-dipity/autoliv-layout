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


export interface ManufactureTrackingLogEntryDto { 
    id: number;
    product_name: string;
    internal_part_number: string;
    quantity: number;
    weight?: number | null;
    failed_quantity?: number | null;
    failed_weight?: number | null;
    manufacture_order_id: string;
    manufacture_order_number?: string | null;
    worker?: string | null;
    operator?: string | null;
    Reporter?: string | null;
    remark?: string | null;
    creation_time: string;
}

