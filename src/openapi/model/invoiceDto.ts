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
import { InvoiceType } from './invoiceType';


export interface InvoiceDto { 
    invoice_code: string;
    amount: number;
    invoice_number: string;
    invoice_type: InvoiceType;
    invoice_date_text: string;
    tax_rate: number;
}
export namespace InvoiceDto {
}


