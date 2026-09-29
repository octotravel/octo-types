/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Refund } from './Refund';
export type Cancellation = {
	/**
	 * Whether the booking was refunded as part of the cancellation. Possible values are FULL, PARTIAL or NONE
	 */
	refund: Refund;
	/**
	 * A text value describing why the cancellation happened.
	 */
	reason: string | null;
	/**
	 * Cancellation notes
	 */
	notes: string | null;
	/**
	 * An RFC 3339 date time in UTC indicating when the booking was cancelled.
	 */
	utcCancelledAt: string;
};
