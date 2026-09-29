/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Reseller = {
	/**
	 * A unique ID / UUID generated to identify the reseller.
	 */
	id: string;
	/**
	 * Reseller name.
	 */
	name: string;
	/**
	 * Reseller reference.
	 */
	reference: string | null;
	/**
	 * An array of tags that can be used to filter.
	 */
	tags: Array<string>;
};
