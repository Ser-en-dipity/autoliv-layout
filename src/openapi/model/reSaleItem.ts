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
import { Asset } from './asset';
import { ReSaleStockRecord } from './reSaleStockRecord';


export interface ReSaleItem { 
    id?: string;
    records?: Array<ReSaleStockRecord> | null;
    index?: number;
    readonly reSaleId?: string;
    asset?: Asset;
    assetId?: string;
    unitPrice?: number;
    readonly quantity?: number;
    readonly amount?: number;
    remark?: string | null;
    creationTime?: string;
    readonly lastModifiedTime?: string;
}

