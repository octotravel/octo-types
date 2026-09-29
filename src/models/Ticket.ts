/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryOption } from './DeliveryOption';
import type { RedemptionMethod } from './RedemptionMethod';
export type Ticket = {
	/**
	 * Specifies how the voucher can be redeemed by the customer:
	 * DIGITAL: The voucher must be presented, either scanned from a digital device (e.g., smartphone) or as a printed copy. Redemption requires a valid voucher or ticket, even in digital form.
	 * MANIFEST: The customer’s name, reference, or other information is checked against a manifest by the supplier. Redemption does not require a ticket or voucher.
	 * PRINT: A physical printed voucher is strictly required for redemption and must be presented at the time of use.
	 * This field ensures resellers and customers understand the specific requirements for redeeming this booking.
	 */
	redemptionMethod: RedemptionMethod;
	/**
	 * An ISO8601 date time in UTC at when the voucher was redeemed, if applicable.
	 */
	utcRedeemedAt: string | null;
	/**
	 * All possible delivery options supplier accepts, in the order of supplier preference
	 */
	deliveryOptions: Array<DeliveryOption>;
	/**
	 * An ISO8601 date time in UTC at when the voucher was redeemed, if applicable.
	 */
	utcNoshowedAt: string | null;
};
