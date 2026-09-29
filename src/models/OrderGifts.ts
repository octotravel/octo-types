/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Gift } from './Gift';
import type { GiftPayment } from './GiftPayment';
export type OrderGifts = {
	giftPayment?: GiftPayment | null;
	gifts?: Array<Gift>;
};
