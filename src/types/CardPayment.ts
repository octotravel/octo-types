export enum CardPaymentGateway {
  Adyen = "adyen",
  Vivawallet = "vivawallet",
  Bridgepay = "bridgepay",
  Stripe = "stripe",
  External = "external",
}

export interface Adyen {
  environment: string;
  clientKey: string;
  session: Nullable<{
    id: string;
    sessionData: string;
  }>;
  paymentMethodsConfiguration: {
    card: {
      hasHolderName: boolean;
      holderNameRequired: boolean;
      billingAddressRequired: boolean;
    };
  };
}

export interface Vivawallet {
  offerCode: string;
}

export interface Bridgepay {
  publicKey: string;
}

export interface Stripe {
  version: string;
  paymentIntent?: {
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
