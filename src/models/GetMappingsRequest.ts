/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResellerStatus } from './ResellerStatus';
export type GetMappingsRequest = {
	/**
	 * Optional product ID to filter mappings.
	 */
	productId?: string;
	/**
	 * Optional option ID to filter mappings.
	 */
	optionId?: string;
	/**
	 * Optional external reference from the reseller.
	 */
	resellerReference?: string;
	/**
	 * Optional status of the mapping on the reseller side.
	 */
	resellerStatus?: ResellerStatus;
};
