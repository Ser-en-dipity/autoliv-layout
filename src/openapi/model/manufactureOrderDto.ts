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


export interface ManufactureOrderDto { 
    id: string;
    order_number: string;
    heat_number?: string | null;
    serial_number?: string | null;
    machine_code?: string | null;
    machines: Array<string>;
}
