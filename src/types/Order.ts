import { Booking, Contact } from "./Booking";
import { OfferCombination } from "./Offer";
import { Pricing } from "./Pricing";

export interface Order extends OrderOffers {
  id: string;
  testMode: boolean;
  supplierReference: string;
  settlementMethod: string;
  status: OrderStatus;
  utcExpiresAt: Nullable<string>;
  utcConfirmedAt: Nullable<string>;
  cancellable: boolean;
  bookings: Array<Booking>;
  contact: Contact;
  termsAccepted?: boolean;
  pricing?: Pricing;
  cardPayment?: unknown;
  returnUrl?: string;
}

export enum OrderStatus {
  ON_HOLD = "ON_HOLD",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
}

export interface OrderOffers {
  offerCombinations?: OfferCombination[];
}
