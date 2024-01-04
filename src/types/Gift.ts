import { Cancellation, Contact, Ticket } from "./Booking";
import { Offer, OfferComparison } from "./Offer";
import { Pricing } from "./Pricing";
import { DeliveryMethod } from "./Product";

export interface Gift extends GiftPricing, GiftOffer {
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
  cancellation: Nullable<Cancellation>;
  contact: Contact;
  recipient: Contact;
  message: Nullable<string>;
  notes: Nullable<string>;
  deliveryMethods: DeliveryMethod[];
  voucher: Nullable<Ticket>;
  giftPayment: Nullable<GiftPayment>;
}

export enum GiftStatus {
  ON_HOLD = "ON_HOLD",
  EXPIRED = "EXPIRED",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  REDEEMED = "REDEEMED",
}

export interface GiftPayment {
  giftCode: string;
  amount: number;
  currency: string;
}

interface GiftPricing {
  pricing?: Pricing;
}

interface GiftOffer {
  offer?: Offer;
  offerCode?: Nullable<string>;
  offerComparisons?: OfferComparison[];
  offerIsCombination?: boolean;
  offers?: Offer[];
  offerTitle?: Nullable<string>;
}
