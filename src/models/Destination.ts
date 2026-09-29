/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Article } from './Article';
import type { AvailableLanguagesItem } from './AvailableLanguagesItem';
import type { Brand } from './Brand';
import type { Category } from './Category';
import type { Claim } from './Claim';
import type { DestinationContact } from './DestinationContact';
import type { Nav } from './Nav';
import type { Notice } from './Notice';
import type { Page } from './Page';
export type Destination = {
	/**
	 * Unique identifier used in the platform to represent the destination.
	 */
	id: string;
	/**
	 * TRUE` identifies the destination as default, and should therefore rendered and selected first
	 */
	default: boolean;
	/**
	 * The name of the destination.
	 */
	name: string | null;
	/**
	 * The title of the destination.
	 */
	title: string | null;
	/**
	 * The description of the destination.
	 */
	shortDescription: string | null;
	/**
	 * `TRUE` identifies the destination as featured, and should therefore rendered and selected first
	 */
	featured: boolean;
	/**
	 * The country the destination is in
	 */
	country: string | null;
	contact: DestinationContact;
	brand: Brand;
	/**
	 * The latitude of the destination.
	 */
	latitude: number | null;
	/**
	 * The longitude of the destination.
	 */
	longitude: number | null;
	/**
	 * The Google Place ID for the destination.
	 */
	googlePlaceId: string | null;
	/**
	 * The URL of the image that represents the destination.
	 */
	bannerImageUrl: string | null;
	/**
	 * The URL of the image that represents the destination.
	 */
	coverImageUrl: string | null;
	/**
	 * The URL of the video that represents the destination.
	 */
	videoUrl: string | null;
	/**
	 * The Facebook URL for the destination.
	 */
	facebookUrl: string | null;
	/**
	 * The Google URL for the destination.
	 */
	googleUrl: string | null;
	/**
	 * The Tripadvisor URL for the destination.
	 */
	tripadvisorUrl: string | null;
	/**
	 * The Twitter URL for the destination.
	 */
	twitterUrl: string | null;
	youtubeUrl: string | null;
	/**
	 * The Instagram URL for the destination.
	 */
	instagramUrl: string | null;
	/**
	 * An array of categories that the destination falls under.
	 */
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
	availableLanguages?: AvailableLanguagesItem | null;
	meta?: Record<string, string>;
	pages?: Array<Page>;
	articles?: Array<Article>;
	navs?: Array<Nav>;
	claims?: Array<Claim>;
	featuredCategories?: Array<Category>;
};
