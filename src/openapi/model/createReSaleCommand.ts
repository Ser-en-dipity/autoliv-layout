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
import { AcctOption } from './acctOption';
import { CreateReSaleItemCommandDto } from './createReSaleItemCommandDto';


export interface CreateReSaleCommand { 
    acct: AcctOption;
    supplier_id: string;
    supplier_name: string;
    remark?: string | null;
    items: Array<CreateReSaleItemCommandDto>;
}

