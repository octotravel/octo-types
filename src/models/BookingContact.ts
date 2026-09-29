/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookingContact = {
	/**
	 * The full name of the booking holder or the ticket holder. Can also be retrieved as an alias for the concatenation of `firstName` and `lastName`
	 */
	fullName?: string;
	/**
	 * The first name of the booking holder or the ticket holder.
	 */
	firstName?: string;
	/**
	 * The last name of the booking holder or the ticket holder.
	 */
	lastName?: string;
	/**
	 * The email address of the booking holder or the ticket holder.
	 */
	emailAddress?: string;
	/**
	 * The phone number of the booking holder or the ticket holder.
	 */
	phoneNumber?: string;
	/**
	 * An array of locale values, equivalent to navigator.languages in a browsers environment.
	 */
	locales?: Array<string>;
	/**
	 * The PO Box of the booking holder or the ticket holder.
	 */
	postalCode?: string;
	/**
	 * The country of the booking holder or the ticket holder.
	 */
	country?: string;
	/**
	 * The nationality of the booking holder or the ticket holder.
	 */
	nationality?: string | null;
	/**
	 * Optional notes for the booking.
	 */
	notes?: string;
	/**
	 * The tax ID of the booking holder or the ticket holder.
	 */
	taxId?: string | null;
	/**
	 * The ID number of the booking holder or the ticket holder.
	 */
	idNumber?: string | null;
	/**
	 * The street address of the booking holder or the ticket holder.
	 */
	streetAddress?: string | null;
	/**
	 * The city of the booking holder or the ticket holder.
	 */
	city?: string | null;
	/**
	 * The state of the booking holder or the ticket holder.
	 */
	state?: string | null;
	/**
	 * Whether the booking holder or the ticket holder allows marketing.
	 */
	allowMarketing?: boolean;
	company?: string | null;
	title?: string | null;
	age?: number | null;
	birthdate?: string | null;
	photoUrl?: string | null;
};
