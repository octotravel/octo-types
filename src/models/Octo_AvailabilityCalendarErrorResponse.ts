/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Octo_ErrorBadRequest } from './Octo_ErrorBadRequest';
import type { Octo_ErrorForbidden } from './Octo_ErrorForbidden';
import type { Octo_ErrorInternalServerError } from './Octo_ErrorInternalServerError';
import type { Octo_ErrorInvalidOptionID } from './Octo_ErrorInvalidOptionID';
import type { Octo_ErrorInvalidProductID } from './Octo_ErrorInvalidProductID';
import type { Octo_ErrorUnauthorized } from './Octo_ErrorUnauthorized';
export type Octo_AvailabilityCalendarErrorResponse = {
	body:
		| Octo_ErrorInvalidProductID
		| Octo_ErrorInvalidOptionID
		| Octo_ErrorBadRequest
		| Octo_ErrorUnauthorized
		| Octo_ErrorInternalServerError
		| Octo_ErrorForbidden;
};
