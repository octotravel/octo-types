/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableLanguagesItem } from './AvailableLanguagesItem';
export type Article = {
	id: string;
	bannerImageUrl: string | null;
	coverImageUrl: string | null;
	href: string | null;
	keywords: Array<string>;
	meta: Record<string, string>;
	shortDescription: string | null;
	title: string | null;
	videoUrl: string | null;
	availableLanguages: AvailableLanguagesItem | null;
};
