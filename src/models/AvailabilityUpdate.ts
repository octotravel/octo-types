/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Availability } from './Availability';
import type { Supplier } from './Supplier';
import type { Webhook } from './Webhook';
export type AvailabilityUpdate = {
	/**
	 * Webhook metadata for this availability update.
	 */
	webhook: Webhook;
	/**
	 * The updated availability block.
	 */
	availability: Availability;
	/**
	 * ID of the product the availability belongs to.
	 */
	productId: string;
	/**
	 * ID of the option the availability belongs to.
	 */
	optionId: string;
	/**
	 * The supplier associated with the availability.
	 */
	supplier: Supplier;
};
