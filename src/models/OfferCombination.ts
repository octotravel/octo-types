/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Booking } from './Booking';
import type { Pricing } from './Pricing';
import type { Unit } from './Unit';
export type OfferCombination = {
	/**
	 * ID of the product in the combination.
	 */
	productId: string;
	/**
	 * ID of the selected option.
	 */
	optionId: string;
	/**
	 * Code used to apply the offer.
	 */
	offerCode: string;
	/**
	 * Title of the promotional offer.
	 */
	offerTitle: string;
	/**
	 * Pricing details for this offer.
	 */
	pricing: Pricing;
	/**
	 * Optional short description.
	 */
	shortDescription?: string;
	/**
	 * Units included in this offer.
	 */
	units: Array<Unit>;
	/**
	 * Optional booking metadata.
	 */
	booking: Booking | null;
};
