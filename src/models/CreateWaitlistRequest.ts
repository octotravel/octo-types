/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
import type { DefaultableID } from './DefaultableID';
import type { WaitlistUnitItemIdentifier } from './WaitlistUnitItemIdentifier';
export type CreateWaitlistRequest = {
	productId: string;
	optionId: DefaultableID;
	returnUrl?: string;
	localDate: string;
	contact: BookingContact;
	units: Array<WaitlistUnitItemIdentifier>;
};
