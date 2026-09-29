/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleLocation } from './GoogleLocation';
import type { GoogleNullableLocalizedName } from './GoogleNullableLocalizedName';
export type GoogleOperator = {
	/**
	 * Localized business profile name as shown on Google.
	 */
	google_business_profile_name: GoogleNullableLocalizedName;
	/**
	 * List of associated locations.
	 */
	locations: Array<GoogleLocation>;
};
