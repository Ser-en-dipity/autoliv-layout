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
import { PoState } from './poState';
import { PurchasingOrderItem } from './purchasingOrderItem';
import { AcctOption } from './acctOption';


export interface PurchasingOrder { 
    id?: string;
    orderNumber?: string | null;
    acct?: AcctOption;
    readonly orderItems?: Array<PurchasingOrderItem> | null;
    readonly amount?: number;
    lastModifiedTime?: string;
    creationTime?: string;
    paid?: boolean;
    state?: PoState;
    remark?: string | null;
    supplierId?: string;
    supplierName?: string | null;
    readonly currency?: string | null;
    readonly taxTypeText?: string | null;
    readonly netAmount?: number;
    readonly tax?: number;
    readonly amountWithTax?: number;
}
export namespace PurchasingOrder {
}


