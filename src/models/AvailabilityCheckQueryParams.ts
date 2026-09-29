/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AvailabilityCheckQueryParams = {
	/**
	 * The product id.
	 */
	productId: string;
	/**
	 * The option id.
	 */
	optionId?: string;
	/**
	 * Optional booking UUID. When set, the slot matching this booking's travel date (and tour time when applicable) is exempt from booking-cutoff and advance-notice closures.
	 */
	uuid?: string;
	localTime?: string;
	localDate?: string;
	/**
	 * Start date to query for (YYYY-MM-DD). Required if `localDateEnd` is set.
	 */
	localDateStart?: string;
	/**
	 * End date to query for (YYYY-MM-DD). Required if `localDateStart` is set.
	 */
	localDateEnd?: string;
	/**
	 * Filter results to specific availability IDs. Cannot be combined with localDate, localDateStart, localDateEnd, or localTime.
	 */
	availabilityIds?: Array<string>;
};
