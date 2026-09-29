/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Booking } from './Booking';
import type { Diff } from './Diff';
import type { Supplier } from './Supplier';
import type { Webhook } from './Webhook';
export type BookingUpdate = {
	/**
	 * Webhook metadata for this update.
	 */
	webhook: Webhook;
	/**
	 * Current state of the booking.
	 */
	booking: Booking;
	/**
	 * List of changes between previous and current state.
	 */
	diff: Array<Diff>;
	supplier: Supplier;
};
