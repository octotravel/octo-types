/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PickupPoint = {
	/**
	 * Unique identifier for the pickup point.
	 */
	id: string;
	/**
	 * Name of the pickup point.
	 */
	name: string;
	/**
	 * Optional directions to reach the pickup point.
	 */
	directions: string | null;
	/**
	 * Optional address of the pickup point.
	 */
	address: string | null;
	/**
	 * Latitude coordinate of the pickup point.
	 */
	latitude: number | null;
	/**
	 * Longitude coordinate of the pickup point.
	 */
	longitude: number | null;
	/**
	 * Local date and time of the pickup point.
	 */
	localDateTime: string | null;
	/**
	 * Local date and time of the pickup point.
	 */
	localDateTimeTo: string | null;
	/**
	 * Google Place ID associated with the pickup point.
	 */
	googlePlaceId: string | null;
	/**
	 * Street address of the pickup point.
	 */
	street: string | null;
	/**
	 * Postal code of the pickup point location.
	 */
	postalCode: string | null;
	/**
	 * Locality (city or town) of the pickup point.
	 */
	locality: string | null;
	/**
	 * Region (e.g., state or province) of the pickup point.
	 */
	region: string | null;
	/**
	 * State of the pickup point.
	 */
	state: string | null;
	/**
	 * Country of the pickup point.
	 */
	country: string | null;
};
