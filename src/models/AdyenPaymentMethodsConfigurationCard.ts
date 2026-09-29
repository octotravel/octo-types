/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdyenPaymentMethodsConfigurationCardBillingAddressMode } from './AdyenPaymentMethodsConfigurationCardBillingAddressMode';
export type AdyenPaymentMethodsConfigurationCard = {
	hasHolderName: boolean;
	billingAddressRequired: boolean;
	billingAddressMode: AdyenPaymentMethodsConfigurationCardBillingAddressMode;
	data: {
		billingAddress: {
			street: string;
			postalCode: string;
			city: string;
			country: string;
			stateOrProvince: string;
		};
	};
	clickToPayConfiguration: {
		merchantDisplayName: string;
		shopperEmail: string;
	};
};
