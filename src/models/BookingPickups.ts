/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PickupPoint } from './PickupPoint';
export type BookingPickups = {
	/**
	 * Whether the booking requires a pickup. This field is only present when octo/pickups capability is requested.
	 */
	pickupRequested?: boolean;
	/**
	 * A hotel name and address that will be included in the booking.
	 * This field is only present when octo/pickups capability is requested.
	 */
	pickupHotel?: string | null;
	/**
	 * A room number in the pickup hotel.
	 * This field is only present when octo/pickups capability is requested.
	 */
	pickupRoom?: string | null;
	/**
	 * Optional notes for the pickup. This field is only present when octo/pickups capability is requested.
	 */
	pickupNotes?: string | null;
	/**
	 * A pickup point that will be included in the booking. This field is only present when octo/pickups capability is requested.
	 */
	pickupPoint?: PickupPoint | null;
	pickupPointId?: string | null;
	pickupHotelRoom?: string | null;
	pickupDispatch?: string | null;
	dropoffDispatch?: string | null;
};
