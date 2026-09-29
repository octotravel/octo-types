/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalGatewayRequest } from './ExternalGatewayRequest';
import type { PaypalGatewayRequest } from './PaypalGatewayRequest';
export type CardPayment = {
	amount: number | null;
	cancel?: boolean | null;
	cardId: string | null;
	currency: string | null;
	external: ExternalGatewayRequest | null;
	gateway: string | null;
	notes?: string | null;
	paypal: PaypalGatewayRequest | null;
};
