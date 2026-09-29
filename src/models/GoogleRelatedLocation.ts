/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GoogleRelatedLocation = {
	/**
	 * Nested location structure with place ID.
	 */
	location: {
		location: {
			/**
			 * Google Place ID of the related location.
			 */
			place_id: string;
		};
	};
	/**
	 * Type of relationship to the main location (e.g., 'NEARBY', 'ALTERNATIVE').
	 */
	relation_type: string;
};
