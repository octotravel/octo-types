/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdyenGateway } from './AdyenGateway';
import type { BridgepayGateway } from './BridgepayGateway';
import type { Card } from './Card';
import type { ExternalGateway } from './ExternalGateway';
import type { PaypalGateway } from './PaypalGateway';
import type { PaytrGateway } from './PaytrGateway';
import type { PeachGateway } from './PeachGateway';
import type { RealaxGateway } from './RealaxGateway';
import type { SpreedlyGateway } from './SpreedlyGateway';
import type { StripeGateway } from './StripeGateway';
import type { VivawalletGateway } from './VivawalletGateway';
export type CardPaymentGateway = {
	id: string;
	gateway: string;
	source: string;
	paid: number;
	totalPaid: number;
	paidSurcharge: number;
	balance: number;
	surcharge: number;
	totalRefunded: number;
	outstandingBalance: number;
	currency: string;
	currencyPrecision: number;
	reusableCards: Array<Card>;
	adyen?: AdyenGateway;
	vivawallet?: VivawalletGateway;
	stripe?: StripeGateway;
	bridgepay?: BridgepayGateway;
	realax?: RealaxGateway;
	paypal?: PaypalGateway;
	external?: ExternalGateway;
	paytr?: PaytrGateway;
	spreedly?: SpreedlyGateway;
	peach?: PeachGateway;
};
