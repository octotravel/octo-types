/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdyenGatewaySession } from './AdyenGatewaySession';
import type { AdyenPaymentMethodsConfiguration } from './AdyenPaymentMethodsConfiguration';
export type AdyenGateway = {
	environment?: string;
	clientKey?: string;
	session?: AdyenGatewaySession | null;
	countryCode?: string;
	paymentMethodsConfiguration?: AdyenPaymentMethodsConfiguration;
};
