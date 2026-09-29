/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableLanguagesItem } from './AvailableLanguagesItem';
export type Category = {
	/**
	 * Unique identifier used in the platform to represent the category.
	 */
	id: string;
	/**
	 * TRUE` identifies the category as default, and should therefore rendered and selected first
	 */
	default: boolean;
	/**
	 * The name of the category.
	 */
	name: string | null;
	/**
	 * The title of the category.
	 */
	title: string | null;
	/**
	 * An array of tags that the category falls under.
	 */
	tags: Array<string>;
	/**
	 * The description of the category
	 */
	shortDescription: string | null;
	/**
	 * The URL of the image that represents the category.
	 */
	coverImageUrl: string | null;
	/**
	 * The URL of the image that represents the category.
	 */
	bannerImageUrl: string | null;
	/**
	 * An array of product IDs that the category falls under. This field is not visible if this Category is a product category.
	 */
	productIds?: Array<string>;
	href?: string | null;
	availableLanguages?: AvailableLanguagesItem | null;
	meta?: Record<string, string>;
};
