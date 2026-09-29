/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Offer } from './Offer';
export type AvailabilityOffers = {
	/**
	 * Optional code used to apply a specific offer.
	 */
	offerCode?: string | null;
	/**
	 * Optional display title of the offer.
	 */
	offerTitle?: string | null;
	/**
	 * List of available offers for the availability.
	 */
	offers?: Array<Offer>;
	/**
	 * Best or selected offer for this availability.
	 */
	offer?: Offer | null;
};
