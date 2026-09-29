/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pricing } from './Pricing';
import type { Product } from './Product';
import type { Unit } from './Unit';
export type OfferComparison = {
	/**
	 * ID of the product being compared.
	 */
	productId: string;
	/**
	 * ID of the product option.
	 */
	optionId: string;
	/**
	 * Pricing details for this offer.
	 */
	pricing: Pricing;
	/**
	 * Full product metadata.
	 */
	product: Product;
	/**
	 * Optional short description for the offer.
	 */
	shortDescription?: string;
	/**
	 * List of units applicable to this offer.
	 */
	units: Array<Unit>;
};
