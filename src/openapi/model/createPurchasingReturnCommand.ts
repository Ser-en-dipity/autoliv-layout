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


export interface CreatePurchasingReturnCommand { 
    purchasing_order_item_id: string;
    batch_id: string;
    stock_id: string;
    quantity: number;
    remark?: string | null;
}

