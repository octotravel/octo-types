/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
import type { BookingReservationBody } from './BookingReservationBody';
import type { CardPayment } from './CardPayment';
import type { CreateGiftBody } from './CreateGiftBody';
import type { SettlementMethod } from './SettlementMethod';
export type CreateOrderBody = {
	bookings?: Array<BookingReservationBody>;
	/**
	 * Contact information for the order.
	 */
	contact?: BookingContact;
	/**
	 * Whether to send a receipt to the customer's email.
	 */
	emailReceipt?: boolean;
	/**
	 * Optional expiration duration for the order, in minutes.
	 */
	expirationMinutes?: number;
	quote?: boolean;
	settlementMethod?: SettlementMethod;
	notes?: string | null;
	/**
	 * Optional ISO 4217 currency code for the order.
	 */
	currency?: string;
	cardPayment?: CardPayment;
	returnUrl?: string | null;
	gatewayId?: string;
	gifts?: Array<CreateGiftBody>;
	identityId?: string;
};
