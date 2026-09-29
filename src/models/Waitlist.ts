/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactField } from './ContactField';
import type { CustomerContact } from './CustomerContact';
import type { DefaultableID } from './DefaultableID';
import type { WaitlistUnitIdentifier } from './WaitlistUnitIdentifier';
export type Waitlist = {
	id: string;
	productId: string;
	optionId: DefaultableID;
	localDate: string;
	units: Array<WaitlistUnitIdentifier>;
	contact: CustomerContact | null;
	visibleContactFields: Array<ContactField>;
	requiredContactFields: Array<ContactField>;
};
