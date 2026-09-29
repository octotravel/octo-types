/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ResourceGroup = {
	/**
	 * Unique identifier for the resource group.
	 */
	id: string;
	/**
	 * Display title of the resource group.
	 */
	title: string;
	/**
	 * Internal name
	 */
	internalName: string;
	/**
	 * Resource group tags
	 */
	tags: Array<string>;
	/**
	 * Indicates whether the group allows resource splitting.
	 */
	split: boolean;
};
