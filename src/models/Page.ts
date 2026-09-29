/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableLanguagesItem } from './AvailableLanguagesItem';
export type Page = {
	id: string;
	body?: string;
	fullscreen: boolean;
	href?: string;
	availableLanguages: AvailableLanguagesItem | null;
	meta?: Record<string, string>;
	shortDescription: string | null;
	showFooter: boolean;
	showHeader: boolean;
	title: string | null;
};
