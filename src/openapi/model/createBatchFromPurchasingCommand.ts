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


export interface CreateBatchFromPurchasingCommand { 
    force: boolean;
    serial_number: string;
    heat_number?: string | null;
    quantity: number;
    weight?: number | null;
    purchasing_order_id: string;
    purchasing_order_item_id?: string;
    stock_id?: string;
    stock_name?: string | null;
    remark?: string | null;
}

