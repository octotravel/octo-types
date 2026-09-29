/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookingCancellationBody = {
	/**
	 * A text value describing why the cancellation happened.
	 */
	reason?: string;
	/**
	 * Whether you want OCTO Cloud to email the guest a copy of their receipt and tickets. (defaults to false)
	 */
	force?: boolean;
	emailReceipt?: boolean;
};
