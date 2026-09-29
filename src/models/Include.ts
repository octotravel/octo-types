/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultableID } from './DefaultableID';
import type { Option } from './Option';
import type { Product } from './Product';
export type Include = {
	/**
	 * The ID of the include.
	 */
	id: string;
	/**
	 * Whether the include is required.
	 */
	required: boolean;
	/**
	 * The limit of the include.
	 */
	limit: number;
	/**
	 * The validity days of the include.
	 */
	validityDays: number | null;
	availabilityRequired: boolean;
	/**
	 * The product ID of the include.
	 */
	productId: string;
	product: Product | null;
	optionId: DefaultableID;
	option: Option | null;
};
