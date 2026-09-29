/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Octo_GetProductsRequest } from './Octo_GetProductsRequest';
export type GetProductsRequest = Octo_GetProductsRequest & {
	/**
	 * Filter products by category UUID. Use "DEFAULT" for no category filtering.
	 */
	categoryId?: string;
	/**
	 * Filter products by destination UUID. Use "DEFAULT" for no destination filtering.
	 */
	destinationId?: string;
	/**
	 * Filter to show only featured products from the checkout's category.
	 */
	featured?: boolean;
	/**
	 * Filter to specific product UUIDs.
	 */
	productIds?: Array<string>;
};
