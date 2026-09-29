/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdyenPaymentMethodsConfigurationApplePay } from './AdyenPaymentMethodsConfigurationApplePay';
import type { AdyenPaymentMethodsConfigurationCard } from './AdyenPaymentMethodsConfigurationCard';
import type { AdyenPaymentMethodsConfigurationGooglePay } from './AdyenPaymentMethodsConfigurationGooglePay';
import type { AdyenPaymentMethodsConfigurationPayPay } from './AdyenPaymentMethodsConfigurationPayPay';
export type AdyenPaymentMethodsConfiguration = {
	card: AdyenPaymentMethodsConfigurationCard;
	paypal: AdyenPaymentMethodsConfigurationPayPay;
	applepay: AdyenPaymentMethodsConfigurationApplePay;
	googlepay: AdyenPaymentMethodsConfigurationGooglePay;
};
