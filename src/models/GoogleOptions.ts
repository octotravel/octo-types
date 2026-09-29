/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleLocalizedName } from './GoogleLocalizedName';
import type { GoogleOperator } from './GoogleOperator';
import type { GoogleOptionCategory } from './GoogleOptionCategory';
import type { GoogleRating } from './GoogleRating';
import type { GoogleRelatedLocation } from './GoogleRelatedLocation';
import type { GoogleUrl } from './GoogleUrl';
export type GoogleOptions = {
	/**
	 * Optional Google operator details.
	 */
	operator: GoogleOperator | null;
	/**
	 * Optional rating data (e.g., average score, count).
	 */
	rating: GoogleRating | null;
	/**
	 * Google landing page URL.
	 */
	landing_page: GoogleUrl;
	/**
	 * Type of inventory (e.g., TICKETED, SCHEDULED).
	 */
	inventory_types: Array<string>;
	/**
	 * Google list view landing page URL.
	 */
	landing_page_list_view: GoogleUrl | null;
	/**
	 * Categories associated with the option.
	 */
	option_categories: Array<GoogleOptionCategory>;
	/**
	 * Related Google locations (e.g., nearby or alternatives).
	 */
	related_locations: Array<GoogleRelatedLocation>;
	/**
	 * Supplier brand name localized for every available language.
	 */
	brand_name: GoogleLocalizedName;
};
