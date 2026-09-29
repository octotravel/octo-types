/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableLanguages } from './AvailableLanguages';
import type { Link } from './Link';
export type ProductVentrataCheckoutContent = {
	href?: string | null;
	meta?: Record<string, string>;
	links?: Array<Link>;
	giftCardAllowed?: boolean;
	relatedProductIds?: Array<string>;
	availableLanguages?: AvailableLanguages | null;
};
