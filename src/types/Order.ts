import { Booking, Contact } from './Booking';
import { CardPayment, CardPaymentGateway } from './CardPayment';
import { GiftPayment } from './Gift';
import { OfferCombination } from './Offer';
import { Pricing } from './Pricing';

export interface Order extends OrderOffers, OrderGift, OrderCardPayment {
  id: string;
  testMode: boolean;
  supplierReference: string;
  settlementMethod: string;
  status: OrderStatus;
  utcExpiresAt: Nullable<string>;
  utcConfirmedAt: Nullable<string>;
  cancellable: boolean;
  bookings: Booking[];
  contact: Contact;
  termsAccepted?: boolean;
  pricing?: Pricing;
  returnUrl?: string;
  confirmable?: boolean;
}

export enum OrderStatus {
  ON_HOLD = 'ON_HOLD',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}

export interface OrderOffers {
  offerCombinations?: OfferCombination[];
}

export interface OrderGift {
  giftPayment?: Nullable<GiftPayment>;
}

export interface OrderCardPayment {
  cardPayment?: CardPayment<CardPaymentGateway>;
}
