/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PickupPoint } from './PickupPoint';
export type OptionPickups = {
	/**
	 * Whether this option has pickup available.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupAvailable?: boolean;
	/**
	 * Whether pickup is required for this option.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupRequired?: boolean;
	/**
	 * Whether pickup is required for this option.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupPoints?: Array<PickupPoint>;
};
