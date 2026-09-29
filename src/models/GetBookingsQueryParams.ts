/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetBookingsQueryParams = {
	/**
	 * The reseller reference on the booking.
	 */
	resellerReference?: string;
	/**
	 * The reference provided by the supplier.
	 */
	supplierReference?: string;
	/**
	 * All bookings made for a specific date.
	 */
	localDate?: string;
	/**
	 * First date of a date range search.
	 */
	localDateStart?: string;
	/**
	 * Last date of a date range search.
	 */
	localDateEnd?: string;
	/**
	 * The product id to filter by.
	 */
	productId?: string;
	/**
	 * The option id to filter by.
	 */
	optionId?: string;
};
