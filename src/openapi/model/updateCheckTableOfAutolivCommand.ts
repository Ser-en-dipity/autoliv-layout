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
import { IDValuePair } from './iDValuePair';


export interface UpdateCheckTableOfAutolivCommand { 
    product_id?: string;
    machine_code?: string | null;
    id_value_pairs?: Array<IDValuePair> | null;
}

