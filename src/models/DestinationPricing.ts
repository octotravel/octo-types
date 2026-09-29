/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DestinationPricing = {
	/**
	 * Is on the object when Pricing capability is requested. Default currency for this product, if you omit the currency parameter on future endpoints this is the value the reservation system will fallback to.
	 */
	defaultCurrency?: string;
	/**
	 * Is on the object when Pricing capability is requested. All the possible currencies that we accept for this product.
	 */
	availableCurrencies?: Array<string>;
};
