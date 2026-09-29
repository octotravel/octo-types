/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FareGroup } from './FareGroup';
export type Fare = {
	/**
	 * fare id
	 */
	id: string;
	/**
	 * internal name
	 */
	internalName: string;
	/**
	 * title
	 */
	title: string;
	/**
	 * short description
	 */
	shortDescription: any;
	/**
	 * fare group
	 */
	fareGroup: FareGroup | null;
};
