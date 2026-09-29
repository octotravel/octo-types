/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Include } from './Include';
export type PackageInclude = {
	/**
	 * Include group name or product name.
	 */
	title?: string;
	/**
	 * Include count.
	 */
	count: number;
	/**
	 * An array of includes.
	 */
	includes: Array<Include>;
};
