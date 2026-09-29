/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Extra } from './Extra';
import type { Pricing } from './Pricing';
export type ExtraItem = {
	/**
	 * Unique identifier for the extra item.
	 */
	id: string;
	/**
	 * Reference ID of the extra.
	 */
	extraId: string;
	/**
	 * Full extra metadata.
	 */
	extra: Extra;
	/**
	 * Pricing details for this specific extra item.
	 */
	pricing: Pricing;
};
