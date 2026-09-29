/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type StripeGateway = {
	version?: string;
	paymentIntent?: {
		id: string;
		publishableKey: string;
		clientSecret: string;
		amount: number;
		currency: string;
	} | null;
	setupIntent?: {
		id: string;
		publishableKey: string;
		clientSecret: string;
	};
};
