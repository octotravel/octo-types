/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
import type { ResourceAllocationRequest } from './ResourceAllocationRequest';
import type { SettlementMethod } from './SettlementMethod';
import type { UnitItemIdentifier } from './UnitItemIdentifier';
export type BookingReservationBody = {
	/**
	 * Your reference for this booking. Also known as a Voucher Number.
	 */
	resellerReference?: string;
	/**
	 * The product ID.
	 */
	productId: string;
	/**
	 * The option id.
	 */
	optionId: string;
	/**
	 * The availability ID for the selected timeslot.
	 */
	availabilityId?: string;
	/**
	 * How many minutes to reserve the availability, otherwise defaults to the supplier default amount.
	 */
	expirationMinutes?: number;
	/**
	 * Optional notes for the booking.
	 */
	notes?: string;
	/**
	 * Whether you want OCTO Cloud to email the guest a copy of their receipt and tickets. (defaults to false).
	 */
	emailReceipt?: boolean;
	/**
	 * An array of unit items in the booking. To retain or modify existing unit items, you must include the unit item with the associated uuid, otherwise that unit item will be removed.
	 */
	unitItems: Array<UnitItemIdentifier>;
	/**
	 * Contact details for the main guest who will attend the tour/attraction. Contact BODY can be applied to both the booking object (the main reservation) or the unit object (individual ticket holders - if the supplier requires this information).
	 */
	contact?: BookingContact;
	/**
	 * Can be used only when pricing capability is used.
	 */
	currency?: string | null;
	/**
	 * The alias of the unit item.
	 */
	alias?: string;
	settlementMethod?: SettlementMethod;
	/**
	 * Whether to quote the booking instead of confirming it.
	 */
	quote?: boolean;
	/**
	 * Whether to set freesale mode.
	 */
	freesale?: boolean;
	/**
	 * Whether the booking was redeemed.
	 */
	redeemed?: boolean;
	/**
	 * A unique UUID to identify the booking. Setting this value acts like an idempotency key preventing you from double booking.
	 */
	uuid?: string;
	tags?: Array<string>;
	orderId?: string;
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
	termsAccepted?: boolean;
	identityId?: string;
	/**
	 * The promotion code
	 */
	offerCode?: string;
	/**
	 * Requested resource allocations (manual resource selection). Only honored when octo/resources is requested.
	 */
	resourceAllocations?: Array<ResourceAllocationRequest>;
};
