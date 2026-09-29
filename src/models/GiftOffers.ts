/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Offer } from './Offer';
import type { OfferComparison } from './OfferComparison';
export type GiftOffers = {
	/**
	 * Optional code used to apply a specific offer.
	 */
	offerCode?: string | null;
	/**
	 * Optional display title of the offer.
	 */
	offerTitle?: string | null;
	offerComparisons?: Array<OfferComparison>;
	offerIsCombination?: boolean;
	/**
	 * List of available offers for the availability.
	 */
	offers?: Array<Offer>;
	/**
	 * Best or selected offer for this availability.
	 */
	offer?: Offer | null;
};
