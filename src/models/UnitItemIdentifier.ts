/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UnitItemIdentifier = {
	/**
	 * The unit item unit ID.
	 */
	uuid?: string;
	/**
	 * A unique UUID to identify the unit, same as the booking uuid except per unit.
	 */
	unitId?: string;
	unitType?: string;
	/**
	 * Your reference for this booking. Also known as a Voucher Number.
	 */
	resellerReference?: string;
	/**
	 * The alias of the unit item.
	 */
	alias?: string;
	/**
	 * The weight value of the unit item, as specified by the customer.
	 */
	weightValue?: number;
	/**
	 * The unit of the weight value (e.g. "kg" or "lb").
	 */
	weightUnit?: string;
};
