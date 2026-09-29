/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrandContact } from './BrandContact';
import type { Font } from './Font';
export type Brand = {
	id: string | null;
	name: string | null;
	contact: BrandContact;
	color: string | null;
	secondaryColor: string | null;
	backgroundColor: string | null;
	accentFont: Font | null;
	bodyFont: Font | null;
	headerFont: Font | null;
	checkoutLogoUrl: string | null;
	logoUrl: string | null;
	logoWhiteUrl: string | null;
	faviconUrl: string | null;
	headerBackgroundColor?: string;
	footerBackgroundColor?: string;
};
