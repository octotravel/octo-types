/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResellerStatus } from './ResellerStatus';
export type MappingToUpdate = {
	/**
	 * Reference string provided by the reseller.
	 */
	resellerReference: string;
	/**
	 * Current status of the mapping from the reseller perspective.
	 */
	resellerStatus: ResellerStatus;
	/**
	 * Display title of the mapping.
	 */
	title: string;
	/**
	 * Public-facing URL of the mapping.
	 */
	url: string;
	/**
	 * Optional webhook URL for updates.
	 */
	webhookUrl: string | null;
	/**
	 * Indicates whether the product option is required.
	 */
	optionRequired: boolean;
	/**
	 * Indicates whether a unit is required.
	 */
	unitRequired: boolean;
};
