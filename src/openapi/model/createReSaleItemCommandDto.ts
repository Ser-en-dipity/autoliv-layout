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
import { ReSaleStockRecordDto } from './reSaleStockRecordDto';


export interface CreateReSaleItemCommandDto { 
    index: number;
    asset_id: string;
    unit_price: number;
    stock_records: Array<ReSaleStockRecordDto>;
    remark?: string | null;
}
