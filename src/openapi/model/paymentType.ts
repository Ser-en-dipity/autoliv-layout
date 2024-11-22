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


export type PaymentType = 'cashOnDelivery' | 'monthEnd30Days' | 'monthEnd60Days' | 'monthEnd90Days' | 'monthEnd120Days' | 'paymentOnDelivery' | 'ticketOnPayment' | 'ticketPaymentInTheMonth' | 'unknown';

export const PaymentType = {
    CashOnDelivery: 'cashOnDelivery' as PaymentType,
    MonthEnd30Days: 'monthEnd30Days' as PaymentType,
    MonthEnd60Days: 'monthEnd60Days' as PaymentType,
    MonthEnd90Days: 'monthEnd90Days' as PaymentType,
    MonthEnd120Days: 'monthEnd120Days' as PaymentType,
    PaymentOnDelivery: 'paymentOnDelivery' as PaymentType,
    TicketOnPayment: 'ticketOnPayment' as PaymentType,
    TicketPaymentInTheMonth: 'ticketPaymentInTheMonth' as PaymentType,
    Unknown: 'unknown' as PaymentType
};
