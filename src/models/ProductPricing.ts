/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PricingPer } from './PricingPer';
export type ProductPricing = {
  /**
   * Is on the object when Pricing capability is requested. Default currency for this product, if you omit the currency parameter on future endpoints this is the value the reservation system will fallback to.
   */
  defaultCurrency?: string;
  /**
   * Is on the object when Pricing capability is requested. All the possible currencies that we accept for this product.
   */
  availableCurrencies?: Array<string>;
  /**
   * Is on the object when Pricing capability is requested. Indicates whether the pricing is per unit (most common), or per booking. Pricing which is per booking is common for private charters or group booking products where the price is the same regardless of how many tickets are purchased.
   */
  pricingPer?: PricingPer;
};
