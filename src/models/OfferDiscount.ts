/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountTax } from './DiscountTax';
export type OfferDiscount = {
	/**
	 * Net price before discount.
	 */
	net: number | null;
	/**
	 * Retail price after discount.
	 */
	retail: number;
	/**
	 * List of taxes included in the discounted price.
	 */
	includedTaxes: Array<DiscountTax>;
};
