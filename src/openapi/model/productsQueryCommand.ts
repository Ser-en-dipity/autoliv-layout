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
import { MATERIAL } from './mATERIAL';
import { FINISH } from './fINISH';


export interface ProductsQueryCommand { 
    customer_ids: Array<string>;
    code_or_name_search?: string | null;
    finish?: FINISH;
    material?: MATERIAL;
}
export namespace ProductsQueryCommand {
}


