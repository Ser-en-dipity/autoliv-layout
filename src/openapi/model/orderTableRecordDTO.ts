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


export interface OrderTableRecordDTO { 
    customerOrderNumber?: string | null;
    productId?: string;
    productName?: string | null;
    quantity?: number;
    unitPrice?: number;
    deliveryTime?: string;
    packing?: string | null;
    remark?: string | null;
}

