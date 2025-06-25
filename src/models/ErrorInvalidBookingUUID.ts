/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseError } from './BaseError';
export type ErrorInvalidBookingUUID = BaseError & {
  /**
   * Missing or invalid booking UUID, or if you're confirming the booking the booking may have expired already.
   */
  uuid: string;
};
