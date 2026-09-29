/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Agent } from './Agent';
import type { BookingStatus } from './BookingStatus';
import type { Cancellation } from './Cancellation';
import type { CardPaymentGateway } from './CardPaymentGateway';
import type { ContactField } from './ContactField';
import type { CustomerContact } from './CustomerContact';
import type { DeliveryMethod } from './DeliveryMethod';
import type { GiftPayment } from './GiftPayment';
import type { GiftVoucher } from './GiftVoucher';
import type { Identity } from './Identity';
import type { Offer } from './Offer';
import type { OfferComparison } from './OfferComparison';
import type { Pricing } from './Pricing';
import type { Reseller } from './Reseller';
import type { Seller } from './Seller';
import type { SettlementMethod } from './SettlementMethod';
import type { User } from './User';
export type Gift = {
	agent: Agent | null;
	alias: string | null;
	active: boolean;
	amount: number;
	cancellable: boolean;
	updatable: boolean;
	cancellation: Cancellation | null;
	confirmable: boolean;
	contact: CustomerContact | null;
	currency: string;
	deliveryMethods: Array<DeliveryMethod>;
	giftPayment: GiftPayment | null;
	id: string;
	message: string | null;
	notes: string | null;
	pricing?: Pricing;
	recipient: CustomerContact | null;
	requiredContactFields: Array<ContactField>;
	reseller: Reseller | null;
	resellerReference: string | null;
	seller: Seller | null;
	settlementMethod: SettlementMethod;
	settlementMethods: Array<SettlementMethod>;
	status: BookingStatus;
	internalStatus: string;
	supplierReference: string;
	testMode: boolean | null;
	user: User | null;
	utcCreatedAt: string;
	utcUpdatedAt: string;
	utcExpiresAt: string | null;
	utcRedeemedAt: string | null;
	utcConfirmedAt: string | null;
	uuid: string;
	visibleContactFields: Array<ContactField>;
	voucher: GiftVoucher;
	identity?: Identity;
	identityId?: string;
	cardPayment?: CardPaymentGateway | null;
	returnUrl?: string | null;
	primary?: boolean;
	orderId?: string;
	orderReference?: string;
	/**
	 * Optional code used to apply a specific offer.
	 */
	offerCode?: string | null;
	/**
	 * Optional display title of the offer.
	 */
	offerTitle?: string | null;
	offerComparisons?: Array<OfferComparison>;
	offerIsCombination?: boolean;
	/**
	 * List of available offers for the availability.
	 */
	offers?: Array<Offer>;
	/**
	 * Best or selected offer for this availability.
	 */
	offer?: Offer | null;
};
