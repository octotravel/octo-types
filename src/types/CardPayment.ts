import { ResultCode } from '@adyen/adyen-web/dist/types/components/types';
import { PaymentMethodsConfiguration } from '@adyen/adyen-web/dist/types/core/types';

export enum CardPaymentGateway {
  Adyen = 'adyen',
  Vivawallet = 'vivawallet',
  Bridgepay = 'bridgepay',
  Stripe = 'stripe',
  External = 'external',
  Paypal = 'paypal',
  Paytr = 'paytr',
}

export interface CardPayment<T extends CardPaymentGateway> {
  gateway: T;
  balance?: number;
  surcharge?: number;
  amount: T extends CardPaymentGateway.External ? number : never;
  currency: T extends CardPaymentGateway.External ? string : never;
  notes: T extends CardPaymentGateway.External ? string : never;
  adyen: T extends CardPaymentGateway.Adyen ? Adyen : never;
  vivawallet: T extends CardPaymentGateway.Vivawallet ? Vivawallet : never;
  bridgepay: T extends CardPaymentGateway.Bridgepay ? Bridgepay : never;
  stripe: T extends CardPaymentGateway.Stripe ? Stripe : never;
  paytr: T extends CardPaymentGateway.Paytr ? Paytr : never;
  paypal: T extends CardPaymentGateway.Paypal ? Paypal : never;
}

export interface Adyen {
  environment: string;
  clientKey: string;
  session: Nullable<{
    id: string;
    returnUrl: string;
    sessionData: string;
  }>;
  paymentResult?: ResultCode;
  paymentMethodsConfiguration: PaymentMethodsConfiguration;
}

export interface Vivawallet {
  orderCode: string;
}

export interface Bridgepay {
  publicKey: string;
  token?: string;
}

export interface Stripe {
  version: string;
  paymentIntent: {
    id: string;
    publishableKey: string;
    clientSecret: string;
    amount: number;
    currency: string;
  };
  setupIntent?: {
    id: string;
    publishableKey: string;
    clientSecret: string;
  };
}

export interface Paytr {
  id: Nullable<string>;
  iframeUrl: Nullable<string>;
  error: Nullable<string>;
}

export interface Paypal {
  orderId: string;
  clientId: string;
}
