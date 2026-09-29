/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookingPickupBody = {
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
