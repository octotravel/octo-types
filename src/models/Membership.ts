/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerContact } from './CustomerContact';
export type Membership = {
	id: string;
	title: string;
	contact: CustomerContact;
	reference: string;
	resellerReference: string | null;
	supplierReference: string;
	availabilityLocalDateStart: string | null;
	availabilityLocalDateEnd: string | null;
};
