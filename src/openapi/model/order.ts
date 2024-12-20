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
import { Customer } from './customer';
import { OrderItem } from './orderItem';
import { ORDERSTATE } from './oRDERSTATE';
import { AcctOption } from './acctOption';


export interface Order { 
    id?: string;
    orderNumber?: string | null;
    customerId?: string;
    customer?: Customer;
    acct?: AcctOption;
    state?: ORDERSTATE;
    creationTime?: string;
    readonly lastModifiedTime?: string;
    remark?: string | null;
    readonly orderItems?: Array<OrderItem> | null;
}
export namespace Order {
}


