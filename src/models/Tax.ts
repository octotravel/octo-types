/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Tax = {
	/**
	 * The name of the tax or fee, such as "VAT", "City Tax", or "Service Charge". This field provides clear labeling of the tax or fee being applied, making the pricing structure easier to interpret.
	 */
	name: string;
	/**
	 * The value of the tax or fee included in the retail price, expressed in the same currency as the pricingFrom.currency. This value indicates the portion of the end-customer price attributable to the specific tax or fee.
	 */
	retail: number;
	original: number;
	/**
	 * The value of the tax or fee included in the net price, expressed in the same currency as the pricingFrom.currency. This value indicates the portion of the reseller’s cost attributable to the specific tax or fee.
	 */
	net: number | null;
	shortDescription: string | null;
};
