/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
import type { UnitItemIdentifier } from './UnitItemIdentifier';
export type BookingConfirmationBody = {
	/**
	 * Whether you want OCTO Cloud to email the guest a copy of their receipt and tickets. (defaults to false)
	 */
	emailReceipt?: boolean;
	/**
	 * Your reference for this booking. Also known as a Voucher Number.
	 */
	resellerReference?: string;
	/**
	 * An array of unit items in the booking. To retain or modify existing unit items, you must include the unit item with the associated uuid, otherwise that unit item will be removed.
	 */
	unitItems?: Array<UnitItemIdentifier>;
	/**
	 * Contact details for the main guest who will attend the tour/attraction. Contact Body can be applied to both the booking object (the main reservation) or the unit object (individual ticket holders - if the supplier requires this information).
	 */
	contact: BookingContact;
	notes?: string;
	metadata?: Record<string, string>;
	/**
	 * Whether the customer requested pickup.
	 */
	pickupRequested?: boolean;
	/**
	 * The ID of the chosen pickup point.
	 */
	pickupPointId?: string;
	/**
	 * The hotel address (optional).
	 */
	pickupHotel?: string;
	/**
	 * The hotel room number (optional).
	 */
	pickupHotelRoom?: string;
};
