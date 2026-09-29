/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerContact } from './CustomerContact';
import type { GiftPayment } from './GiftPayment';
import type { SettlementMethod } from './SettlementMethod';
export type UpdateGiftBody = {
	alias?: string;
	amount?: number;
	contact?: CustomerContact;
	currency?: string;
	emailReceipt?: boolean;
	expirationMinutes?: number;
	giftPayment?: GiftPayment;
	message?: string;
	notes?: string;
	resellerReference?: string;
	settlementMethod?: SettlementMethod;
};
