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
import { ASSETTYPE } from './aSSETTYPE';
import { PoState } from './poState';


export interface PurchasingOrderItemQueryCommand { 
    supplier_ids: Array<string>;
    asset_ids: Array<string>;
    asset_type?: ASSETTYPE;
    date_range: Array<string>;
    include_old: boolean;
    code_or_name_search?: string | null;
    order_state?: PoState;
    readonly empty?: boolean;
}
export namespace PurchasingOrderItemQueryCommand {
}


