/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Diff = {
	/**
	 * The operation type (e.g., replace, add, remove).
	 */
	op: string;
	/**
	 * The JSON path to the modified value.
	 */
	path: string;
	/**
	 * The original value before the change.
	 */
	was: string;
	/**
	 * The new value after the change.
	 */
	value: string;
};
