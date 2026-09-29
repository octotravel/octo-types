/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Octo_BaseError } from './Octo_BaseError';
export type Octo_ErrorInvalidBookingUUID = Octo_BaseError & {
	/**
	 * Missing or invalid booking UUID, or if you're confirming the booking the booking may have expired already.
	 */
	uuid: string;
};
