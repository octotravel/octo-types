/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Article } from './Article';
import type { AvailableLanguages } from './AvailableLanguages';
import type { Brand } from './Brand';
import type { Category } from './Category';
import type { CheckoutDomain } from './CheckoutDomain';
import type { CheckoutSitemapEntry } from './CheckoutSitemapEntry';
import type { Claim } from './Claim';
import type { Destination } from './Destination';
import type { DestinationContact } from './DestinationContact';
import type { Nav } from './Nav';
import type { Notice } from './Notice';
import type { Page } from './Page';
export type CheckoutConfigContent = {
	bodyHtml: string | null;
	destinations?: Array<Destination>;
	domains?: Array<CheckoutDomain>;
	footerHtml: string | null;
	headHtml: string | null;
	legacyWidgetToken?: string | null;
	redirects?: Record<string, string>;
	showFooter?: boolean;
	showHeader?: boolean;
	sitemap?: Record<string, CheckoutSitemapEntry>;
	id: string;
	default: boolean;
	name: string | null;
	title: string | null;
	shortDescription: string | null;
	featured: boolean;
	country: string | null;
	contact: DestinationContact;
	brand: Brand;
	latitude: number | null;
	longitude: number | null;
	googlePlaceId: string | null;
	bannerImageUrl: string | null;
	coverImageUrl: string | null;
	videoUrl: string | null;
	facebookUrl: string | null;
	googleUrl: string | null;
	tripadvisorUrl: string | null;
	twitterUrl: string | null;
	youtubeUrl: string | null;
	instagramUrl: string | null;
	categories?: Array<Category>;
	tags: Array<string>;
	address: string | null;
	notices: Array<Notice>;
	/**
	 * Is on the object when Pricing capability is requested. Default currency for this product, if you omit the currency parameter on future endpoints this is the value the reservation system will fallback to.
	 */
	defaultCurrency?: string;
	/**
	 * Is on the object when Pricing capability is requested. All the possible currencies that we accept for this product.
	 */
	availableCurrencies?: Array<string>;
	href?: string | null;
	availableLanguages?: AvailableLanguages | null;
	meta?: Record<string, string>;
	pages?: Array<Page>;
	articles?: Array<Article>;
	navs?: Array<Nav>;
	claims?: Array<Claim>;
	featuredCategories?: Array<Category>;
};
