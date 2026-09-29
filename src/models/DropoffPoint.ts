/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DropoffPoint = {
	/**
	 * Unique identifier for the dropoff point.
	 */
	id: string;
	/**
	 * Name of the dropoff point.
	 */
	name: string | null;
	/**
	 * Optional directions to reach the dropoff point.
	 */
	directions: string | null;
	/**
	 * Optional address of the dropoff point.
	 */
	address: string | null;
	/**
	 * Latitude coordinate of the dropoff point.
	 */
	latitude: number | null;
	/**
	 * Longitude coordinate of the dropoff point.
	 */
	longitude: number | null;
	/**
	 * Local date and time of the dropoff point.
	 */
	localDateTime: string | null;
	/**
	 * Local date and time of the dropoff point.
	 */
	localDateTimeTo: string | null;
	/**
	 * Google Place ID associated with the dropoff point.
	 */
	googlePlaceId: string | null;
	/**
	 * Street address of the dropoff point.
	 */
	street: string | null;
	/**
	 * Postal code of the dropoff point location.
	 */
	postalCode: string | null;
	/**
	 * Locality (city or town) of the dropoff point.
	 */
	locality: string | null;
	/**
	 * Region (e.g., state or province) of the dropoff point.
	 */
	region: string | null;
	/**
	 * State of the dropoff point.
	 */
	state: string | null;
	/**
	 * Country of the dropoff point.
	 */
	country: string | null;
};
