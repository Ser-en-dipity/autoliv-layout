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
import { BatchDestinationType } from './batchDestinationType';


export interface BatchTakeOutCommand { 
    machine_id?: string | null;
    order_id?: string | null;
    item_id?: string;
    batch_id: string;
    quantity: number;
    type: BatchDestinationType;
    stock_id: string;
    stock_name?: string | null;
    customer_order_number?: string | null;
    consumable?: boolean;
}
export namespace BatchTakeOutCommand {
}


