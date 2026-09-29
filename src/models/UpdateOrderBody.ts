/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
import type { SettlementMethod } from './SettlementMethod';
export type UpdateOrderBody = {
	/**
	 * Optional expiration duration for the order, in minutes.
	 */
	expirationMinutes?: number;
	/**
	 * Whether to send a receipt to the customer's email.
	 */
	emailReceipt?: boolean;
	/**
	 * Contact information for the order.
	 */
	contact?: BookingContact;
	quote?: boolean;
	settlementMethod?: SettlementMethod;
	notes?: string | null;
	/**
	 * Optional ISO 4217 currency code for the order.
	 */
	currency?: string;
};
