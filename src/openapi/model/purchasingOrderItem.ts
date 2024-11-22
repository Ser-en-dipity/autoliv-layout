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
import { PurchasingReturnEntry } from './purchasingReturnEntry';
import { UNIT } from './uNIT';
import { PurchasingReceiptEntry } from './purchasingReceiptEntry';


export interface PurchasingOrderItem { 
    id?: string;
    deliveryTime?: string;
    readonly purchasingOrderId?: string;
    readonly amount?: number;
    readonly amountWithoutTax?: number;
    readonly amountWithTax?: number;
    readonly tax?: number;
    readonly unitPrice?: number;
    readonly unitPriceWithoutTax?: number;
    readonly unitPriceWithTax?: number;
    quantity?: number;
    readonly quantityCancelled?: number;
    assetId?: string;
    assetName?: string | null;
    unit?: UNIT;
    index?: number;
    readonly receiptEntries?: Array<PurchasingReceiptEntry> | null;
    readonly returnEntries?: Array<PurchasingReturnEntry> | null;
    readonly quantityReceived?: number;
    readonly quantityReturned?: number;
    readonly quantityBalanced?: number;
    creationTime?: string;
    remark?: string | null;
    readonly closed?: boolean;
}
export namespace PurchasingOrderItem {
}


