/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryOption } from './DeliveryOption';
import type { RedemptionMethod } from './RedemptionMethod';
export type Ticket = {
  /**
   * How the voucher can be redeemed. Possible values are:
   * `MANIFEST` The guest name will be written down and they just need to show up
   * `DIGITAL` The tickets/voucher must be scanned but can be on mobile
   * `PRINT` The tickets/voucher must be printed and presented on arrival
   */
  redemptionMethod: RedemptionMethod;
  /**
   * How the voucher can be redeemed. Possible values are:
   * `MANIFEST` The guest name will be written down and they just need to show up
   * `DIGITAL` The tickets/voucher must be scanned but can be on mobile
   * `PRINT` The tickets/voucher must be printed and presented on arrival
   */
  utcRedeemedAt: string | null;
  /**
   * How the voucher can be redeemed. Possible values are:
   * `MANIFEST` The guest name will be written down and they just need to show up
   * `DIGITAL` The tickets/voucher must be scanned but can be on mobile
   * `PRINT` The tickets/voucher must be printed and presented on arrival
   */
  deliveryOptions: Array<DeliveryOption>;
};
