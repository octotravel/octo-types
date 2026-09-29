/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Octo_ErrorForbidden } from './Octo_ErrorForbidden';
import type { Octo_ErrorInternalServerError } from './Octo_ErrorInternalServerError';
import type { Octo_ErrorInvalidBookingUUID } from './Octo_ErrorInvalidBookingUUID';
import type { Octo_ErrorUnauthorized } from './Octo_ErrorUnauthorized';
import type { Octo_ErrorUnprocessableEntity } from './Octo_ErrorUnprocessableEntity';
export type Octo_BookingCancellationErrorResponse = {
	body:
		| Octo_ErrorInvalidBookingUUID
		| Octo_ErrorUnprocessableEntity
		| Octo_ErrorUnauthorized
		| Octo_ErrorInternalServerError
		| Octo_ErrorForbidden;
};
