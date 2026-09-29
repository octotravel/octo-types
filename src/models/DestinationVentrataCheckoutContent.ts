/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Article } from './Article';
import type { AvailableLanguages } from './AvailableLanguages';
import type { Category } from './Category';
import type { Claim } from './Claim';
import type { Nav } from './Nav';
import type { Page } from './Page';
export type DestinationVentrataCheckoutContent = {
	href?: string | null;
	availableLanguages?: AvailableLanguages | null;
	meta?: Record<string, string>;
	pages?: Array<Page>;
	articles?: Array<Article>;
	navs?: Array<Nav>;
	claims?: Array<Claim>;
	featuredCategories?: Array<Category>;
};
