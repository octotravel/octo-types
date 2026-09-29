/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OptionRestrictions = {
	/**
	 * The minimum number of units (tickets) that can be purchased in a single booking. A null value indicates no minimum.
	 */
	minUnits: number | null;
	/**
	 * The maximum number of units (tickets) that can be purchased in a single booking. A null value indicates no maximum.
	 */
	maxUnits: number | null;
	/**
	 * The minimum number of pax units that can be purchased in a single booking (null = 0).
	 */
	minPaxCount: number | null;
	/**
	 * The maximum number of pax units that can be purchased in a single booking (null = unlimited).
	 */
	maxPaxCount: number | null;
};
