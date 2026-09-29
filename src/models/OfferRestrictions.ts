/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OfferRestrictions = {
	/**
	 * Minimum number of units allowed.
	 */
	minUnits: number | null;
	/**
	 * Maximum number of units allowed.
	 */
	maxUnits: number | null;
	/**
	 * Minimum total price or quantity allowed.
	 */
	minTotal: number | null;
	/**
	 * Maximum total price or quantity allowed.
	 */
	maxTotal: number | null;
	/**
	 * List of unit IDs that the restriction applies to.
	 */
	unitIds: Array<string>;
};
