/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomerContact = {
	/**
	 * The full name of the booking holder. Can also be retrieved as an alias for the concatenation of firstName and lastName
	 */
	fullName: string | null;
	/**
	 * The first name of the booking holder.
	 */
	firstName: string | null;
	/**
	 * The last name of the booking holder.
	 */
	lastName: string | null;
	/**
	 * The email address of the booking holder.
	 */
	emailAddress: string | null;
	/**
	 * The phone number of the booking holder.
	 */
	phoneNumber: string | null;
	/**
	 * An array of locale values, equivalent to navigator.languages in a browsers environment; representing customer language for booking communications.
	 */
	locales: Array<string> | null;
	/**
	 * The PO Box of the booking holder or the ticket holder.
	 */
	postalCode: string | null;
	/**
	 * The country of the booking holder or the ticket holder.
	 */
	country: string | null;
	/**
	 * The nationality of the booking holder or the ticket holder.
	 */
	nationality: string | null;
	/**
	 * Customer-facing public notes for the booking.
	 */
	notes: string | null;
	id: string | null;
	/**
	 * The tax ID of the booking holder or the ticket holder.
	 */
	taxId: string | null;
	/**
	 * The ID number of the booking holder or the ticket holder.
	 */
	idNumber: string | null;
	/**
	 * The tax ID of the booking holder or the ticket holder.
	 */
	title: string | null;
	/**
	 * The street address of the booking holder or the ticket holder.
	 */
	streetAddress: string | null;
	/**
	 * Whether the street address of the booking holder or the ticket holder has been verified.
	 */
	addressVerified: boolean | null;
	/**
	 * The city of the booking holder or the ticket holder.
	 */
	city: string | null;
	/**
	 * The state of the booking holder or the ticket holder.
	 */
	state: string | null;
	/**
	 * Whether the booking holder or the ticket holder allows marketing.
	 */
	allowMarketing: boolean;
	company: string | null;
	age: number | null;
	birthdate: string | null;
	photoUrl: string | null;
	tags: Array<string>;
	reference: string | null;
};
