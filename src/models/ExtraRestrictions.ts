/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UnitType } from './UnitType';
export type ExtraRestrictions = {
	/**
	 * Indicates whether this restriction is the default one.
	 */
	default: boolean;
	/**
	 * Specifies if this restriction is required.
	 */
	required: boolean;
	minAge: number;
	maxAge: number;
	idRequired: boolean;
	/**
	 * Minimum quantity required.
	 */
	minQuantity: number | null;
	/**
	 * Maximum quantity allowed (optional).
	 */
	maxQuantity: number | null;
	/**
	 * Minimum custom retail price allowed, expressed in the same currency as the product's base currency.
	 */
	minCustomRetail: number;
	/**
	 * Maximum custom retail price allowed, expressed in the same currency as the product's base currency.
	 */
	maxCustomRetail: number | null;
	paxCount: number;
	accompaniedBy: Array<UnitType>;
	accompaniedByRatio: number | null;
	accompaniedByRatioDenominator: number;
	/**
	 * Specifies other extras that must not be combined with this one. Array of extra IDs.
	 */
	notAccompaniedBy: Array<UnitType>;
};
