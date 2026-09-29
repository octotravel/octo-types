/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckoutSitemapEntryRel } from './CheckoutSitemapEntryRel';
export type CheckoutSitemapEntry = {
	id: string | null;
	description: string | null;
	destinationId?: string;
	keywords: Array<string>;
	language: string;
	name: string | null;
	rel: CheckoutSitemapEntryRel;
	title: string | null;
};
