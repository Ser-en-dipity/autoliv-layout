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


export interface OrderItemDto { 
    index: number;
    product_id: string;
    product_name: string;
    customer_order_number: string;
    unit_price: number;
    quantity: number;
    order_deadline: string;
    packing?: string | null;
    remark?: string | null;
}

