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
import { UNIT } from './uNIT';
import { Specs } from './specs';


export interface CreateMaterialCommand { 
    code: string;
    name: string;
    unit: UNIT;
    spec: Specs;
}
export namespace CreateMaterialCommand {
}


