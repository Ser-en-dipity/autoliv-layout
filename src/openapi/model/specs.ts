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
import { RAW } from './rAW';
import { MATERIALSHAPE } from './mATERIALSHAPE';


export interface Specs { 
    diameter?: number | null;
    outer_diameter?: number | null;
    inner_diameter?: number | null;
    hex_length?: number | null;
    length?: number | null;
    raw: RAW;
    material_grade: string;
    shape: MATERIALSHAPE;
    text?: string | null;
}
export namespace Specs {
}


