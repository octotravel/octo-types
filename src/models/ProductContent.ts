/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Brand } from './Brand';
import type { Category } from './Category';
import type { Destination } from './Destination';
import type { FAQ } from './FAQ';
import type { Image } from './Image';
export type ProductContent = {
	/**
	 * Country code for this product. Only present when octo/content capability is requested.
	 */
	country?: string;
	/**
	 * Location for this product. Only present when octo/content capability is requested.
	 */
	location?: string | null;
	/**
	 * Destination for this product. Only present when octo/content capability is requested.
	 */
	destination?: Destination;
	/**
	 * Alert message for this product. Only present when octo/content capability is requested.
	 */
	alert?: string | null;
	/**
	 * Title for this product. Only present when octo/content capability is requested.
	 */
	title?: string;
	/**
	 * Subtitle for this product. Only present when octo/content capability is requested.
	 */
	subtitle?: string | null;
	/**
	 * Description for this product. Only present when octo/content capability is requested.
	 */
	description?: string | null;
	/**
	 * Short description for this product. Only present when octo/content capability is requested.
	 */
	shortDescription?: string | null;
	/**
	 * Categories for this product. Only present when octo/content capability is requested.
	 */
	categories?: Array<Category>;
	/**
	 * Inclusions for this product. Only present when octo/content capability is requested.
	 */
	inclusions?: Array<string>;
	/**
	 * Exclusions for this product. Only present when octo/content capability is requested.
	 */
	exclusions?: Array<string>;
	/**
	 * Highlights for this product. Only present when octo/content capability is requested.
	 */
	highlights?: Array<string>;
	/**
	 * Whether this product is point to point or not. Only present when octo/content capability is requested.
	 */
	pointToPoint?: boolean;
	/**
	 * Booking terms for this product. Only present when octo/content capability is requested.
	 */
	bookingTerms?: string | null;
	/**
	 * Privacy terms for this product. Only present when octo/content capability is requested.
	 */
	privacyTerms?: string | null;
	/**
	 * Redemption instructions for this product. Only present when octo/content capability is requested.
	 */
	redemptionInstructions?: string | null;
	/**
	 * Usage instructions for this product. Only present when octo/content capability is requested.
	 */
	usageInstructions?: string | null;
	/**
	 * Cancellation policy for this product. Only present when octo/content capability is requested.
	 */
	cancellationPolicy?: string | null;
	/**
	 * FAQs for this product. Only present when octo/content capability is requested.
	 */
	faqs?: Array<FAQ>;
	coverImageUrl?: string | null;
	bannerImageUrl?: string | null;
	logoUrl?: string | null;
	videoUrl?: string | null;
	/**
	 * Gallery image URLs for this product. Only present when octo/content capability is requested.
	 */
	galleryImages?: Array<Image>;
	/**
	 * Banner image URLs for this product. Only present when octo/content capability is requested.
	 */
	bannerImages?: Array<Image>;
	googlePlaceId?: string | null;
	latitude?: number | null;
	longitude?: number | null;
	address?: string | null;
	keywords?: Array<string>;
	tagline?: string | null;
	brand?: Brand;
};
