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
import { MFGORDERSTATE } from './mFGORDERSTATE';


export interface UpdateManufactureOrderCommand { 
    id?: string;
    machines?: Set<string> | null;
    state?: MFGORDERSTATE;
    quantity?: number;
    description?: string | null;
}
export namespace UpdateManufactureOrderCommand {
}


