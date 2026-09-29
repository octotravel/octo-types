/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraPricing } from './ExtraPricing';
import type { OfferDiscount } from './OfferDiscount';
import type { Tax } from './Tax';
import type { UnitType } from './UnitType';
export type PricingUnit = {
	/**
	 * Represents the advertised marketing price, which must be equal to or higher than pricingFrom.retail. Typically used for strike-through pricing, it highlights the original or component-based value of the product when the retail price reflects a discount or bundled offer. For example, a package product combining multiple components (e.g., hotel + tour + meals) may have a total component value of $500 (original), while the bundled retail price is $400. In such cases, the original price is displayed to show savings.This field should only be shown when it is higher than pricingFrom.retail and must accurately reflect a valid reference price, ensuring transparency and trust.
	 */
	original: number;
	/**
	 * The supplier’s recommended sale price, including all taxes and fees. This is the price charged to end customers and represents the total cost.
	 */
	retail: number;
	/**
	 * The wholesale price charged to the reseller, including all taxes and fees. This price reflects the amount the reseller pays to the supplier.
	 */
	net: number | null;
	/**
	 * Specifies the currency used for the prices provided in the pricingFrom object. The value must adhere to ISO 4217 currency codes (e.g., USD, EUR, JPY) to ensure consistency across systems.
	 */
	currency: string;
	/**
	 * All pricing is given in integers to avoid floating point rounding issues. e.g. USD = 2 and JPY = 0. To convert a price to decimal you should do: price / (10 ** currencyPrecision) where ** is to the power of e.g. Math.pow(10, currencyPrecision).
	 */
	currencyPrecision: number;
	/**
	 * This field defines the number of decimal places used for the currency in the pricingFrom object, ensuring precise representation and preventing rounding errors during calculations. For example, in currencies like USD, which have a precision of 2, prices are expressed in cents (e.g., $45.00 is represented as 4500). In currencies like JPY, which have a precision of 0, prices are expressed as whole yen amounts (e.g., ¥4500 is represented as 4500). By aligning with the specific decimal requirements of different currencies, this field guarantees accurate pricing calculations and consistent handling across various currency formats.
	 */
	includedTaxes: Array<Tax>;
	/**
	 * ID of the unit this pricing is related to
	 */
	unitId: string;
	unitType: UnitType;
	offerDiscount?: OfferDiscount | null;
	extraPricing?: Array<ExtraPricing>;
	extraPricingFrom?: Array<ExtraPricing>;
};
