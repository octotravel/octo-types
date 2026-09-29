/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Booking } from './Booking';
import type { Include } from './Include';
export type BookingPackages = {
	/**
	 * Whether the booking is a package.
	 * This field is only present when octo/packages capability is requested.
	 */
	isPackage?: boolean;
	/**
	 * The package ID that identifies the package in the booking system to make this reservation.
	 * This field is only present when octo/packages capability is requested.
	 */
	packageIncludeId?: string | null;
	/**
	 * A package that will be included in the booking.
	 * This field is only present when octo/packages capability is requested.
	 */
	packageInclude?: Include | null;
	/**
	 * An array of bookings that will be included in the package.
	 * This field is only present when octo/packages capability is requested.
	 */
	packageBookings?: Array<Booking>;
	packageUnitItemUuid?: any;
};
