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
import { ASSETTYPE } from './aSSETTYPE';
import { SpecRecord } from './specRecord';
import { RAW } from './rAW';
import { MATERIALSHAPE } from './mATERIALSHAPE';


export interface RawMaterial { 
    id?: string;
    assetType?: ASSETTYPE;
    code?: string | null;
    unit?: UNIT;
    name?: string | null;
    creationTime?: string;
    readonly lastModifiedTime?: string;
    specifications?: Set<SpecRecord> | null;
    readonly nickName?: string | null;
    remark?: string | null;
    isDeleted?: boolean;
    raw?: RAW;
    materialDescription?: string | null;
    description?: string | null;
    shape?: MATERIALSHAPE;
    readonly descriptionForEs?: string | null;
}
export namespace RawMaterial {
}


