/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { uuid } from './UUID';
export type AvailabilityCalendarBatchBody = {
	/**
	 * The product id.
	 */
	productId?: string;
	/**
	 * List of product ids
	 */
	productIds?: Array<uuid>;
	/**
	 * Start date to query for (YYYY-MM-DD).
	 */
	localDateStart: string;
	/**
	 * End date to query for (YYYY-MM-DD).
	 */
	localDateEnd: string;
};
