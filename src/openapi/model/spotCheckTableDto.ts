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
import { DateValuePair } from './dateValuePair';


export interface SpotCheckTableDto { 
    id?: string | null;
    specialFeature?: string | null;
    checkItem?: string | null;
    setValue?: string | null;
    checkMethod?: string | null;
    dateValuePairs?: Array<DateValuePair> | null;
}

