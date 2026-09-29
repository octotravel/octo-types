/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingAdjustment } from './BookingAdjustment';
export type BookingAdjustments = {
	/**
	 * An array of adjustments that will be included in the booking. This field is only present when octo/adjustments capability is requested.
	 */
	adjustments?: Array<BookingAdjustment>;
};
