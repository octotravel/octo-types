/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SupplierContact = {
	/**
	 * The supplier's official website URL. This should link directly to the supplier's primary website or a dedicated page about the supplier within a supplier system. The URL should not reference a general supplier system but a specific, identifiable supplier presence. This field can be null if no website is available.
	 */
	website: string | null;
	/**
	 * The email address for customer service inquiries, primarily for end customers. This should be a direct and monitored email address for resolving queries and providing support. The field may be null if email support is not offered or the email address is unavailable or not provided in supplier system.
	 */
	email: string | null;
	/**
	 * The customer service telephone number for end customers, formatted according to the E.164 standard. This format includes the country code followed by the national number, with no spaces, dashes, or special characters. This field can be null if telephone support is unavailable or not provided in supplier system.
	 */
	telephone: string | null;
	/**
	 * The full mailing address of the location as a single string. It includes street address, city, state, postal code, and country. If no address is provided, this field can be null. For structured details, use the additional address-related fields
	 */
	address: string | null;
};
