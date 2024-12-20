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
import { DeliveryNoteItem } from './deliveryNoteItem';
import { NoteDescription } from './noteDescription';
import { SalesReturn } from './salesReturn';
import { Product } from './product';


export interface OrderItem { 
    id?: string;
    readonly orderId?: string;
    index?: number;
    unitPrice?: number;
    quantity?: number;
    customerOrderNumber?: string | null;
    productId?: string;
    productName?: string | null;
    readonly unitPriceWithTax?: number;
    readonly unitPriceWithoutTax?: number;
    product?: Product;
    packing?: string | null;
    readonly orderDeadline?: string;
    readonly salesReturn?: Array<SalesReturn> | null;
    readonly deliveryNoteItems?: Array<DeliveryNoteItem> | null;
    readonly quantityDelivered?: number;
    readonly quantityReturned?: number;
    readonly quantityBalanced?: number;
    creationTime?: string;
    readonly lastModifiedTime?: string;
    remark?: string | null;
    note?: NoteDescription;
    readonly quantityCancelled?: number;
    readonly closed?: boolean;
}

