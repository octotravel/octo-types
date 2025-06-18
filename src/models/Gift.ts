import { BookingCancellation } from './BookingCancellation';
import { BookingPricing } from './BookingPricing';
import { Contact } from './Contact';
import type { DeliveryMethod } from './DeliveryMethod';
import type { Offer, OfferComparison } from './Offer';
import type { Ticket } from './Ticket';

export interface Gift extends BookingPricing, GiftOffer {
  id: string;
  uuid: string;
  testMode: boolean;
  resellerReference: string;
  supplierReference: string;
  settlementMethod: string;
  status: GiftStatus;
  utcCreatedAt: string;
  utcUpdatedAt: Nullable<string>;
  utcExpiresAt: Nullable<string>;
  utcRedeemedAt: Nullable<string>;
  utcConfirmedAt: Nullable<string>;
  amount: number;
  currency: string;
  cancellable: boolean;
  cancellation: Nullable<BookingCancellation>;
  contact: Contact;
  recipient: Contact;
  message: Nullable<string>;
  notes: Nullable<string>;
  deliveryMethods: DeliveryMethod[];
  voucher: Nullable<Ticket>;
  giftPayment: Nullable<BookingPricing>;
}

export enum GiftStatus {
  ON_HOLD = 'ON_HOLD',
  EXPIRED = 'EXPIRED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  REDEEMED = 'REDEEMED',
}

export interface GiftPayment {
  giftCode: string;
  amount: number;
  currency: string;
}

interface GiftOffer {
  offer?: Offer;
  offerCode?: Nullable<string>;
  offerComparisons?: OfferComparison[];
  offerIsCombination?: boolean;
  offers?: Offer[];
  offerTitle?: Nullable<string>;
}
