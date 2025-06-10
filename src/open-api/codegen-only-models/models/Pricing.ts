/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tax } from './Tax';
export type Pricing = {
  /**
   * The original price for this product which will be the same or higher than the sale amount. Use this to show a discount has been applied e.g. $10 $8.50
   */
  original: number;
  /**
   * The sale price you should charge your customers.
   */
  retail: number;
  /**
   * The wholesale rate the supplier will charge you for this sale.
   */
  net: number | null;
  /**
   * The currency.
   */
  currency: string;
  /**
   * All pricing is given in integers to avoid floating point rounding issues. e.g. USD = 2 and JPY = 0. To convert a price to decimal you should do: price / (10 ** currencyPrecision) where ** is to the power of e.g. Math.pow(10, currencyPrecision).
   */
  currencyPrecision: number;
  /**
   * Any taxes included in the retail and/or net price.
   */
  includedTaxes: Array<Tax>;
};
