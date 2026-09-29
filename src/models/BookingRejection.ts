/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookingRejection = {
	/**
	 * A text value describing why the rejection happened.
	 */
	reason: string | null;
	/**
	 * An RFC 3339 date time in UTC indicating when the booking was rejected.
	 */
	utcRejectedAt: string | null;
};
