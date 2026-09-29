/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AvailabilityResourcesQueryParams = {
	/**
	 * The unique identifier for the product, used across the platform to check availability, create bookings, etc. This identifier must be unique within the scope of the supplier’s system to ensure accurate referencing and operations.
	 */
	productId: string;
	/**
	 * A unique identifier for the option within the product. This ID is critical for identifying specific options during bookings or other API interactions.
	 */
	optionId?: string;
	/**
	 * A unique identifier for this availability. This ID is used during booking and must be unique within the scope of an option.
	 */
	availabilityId: string;
};
