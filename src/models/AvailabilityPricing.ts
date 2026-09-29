/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pricing } from './Pricing';
import type { PricingUnit } from './PricingUnit';
export type AvailabilityPricing = {
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	unitPricing?: Array<PricingUnit>;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	pricing?: Pricing;
};
