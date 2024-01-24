import { PickupPoint } from './PickupPoint';
import { Unit } from './Unit';
import { Availability } from './Availability';
import { Option } from './Option';
import { DeliveryFormat, DeliveryMethod, Product, RedemptionMethod } from './Product';
import { Pricing } from './Pricing';
import { Offer, OfferComparison } from './Offer';
import { QuestionAnswer } from './Question';
import { ResourceAlloctation } from './Resources';
import { GiftPayment } from './Gift';
import { ExtraItem } from './Extras';
import { PackageBooking } from './Package';
import { Adyen, Bridgepay, CardPayment, CardPaymentGateway, Stripe, Vivawallet } from './CardPayment';
import { Notice } from './Content';

export enum BookingStatus {
  ON_HOLD = 'ON_HOLD',
  CONFIRMED = 'CONFIRMED',
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
  REDEEMED = 'REDEEMED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}

export interface Booking
  extends BookingPricing,
    BookingPickup,
    BookingContent,
    BookingCart,
    BookingOffers,
    BookingQuestions,
    BookingResources,
    BookingGift,
    BookingExtras,
    BookingPackage,
    BookingCardPayment {
  id: string;
  uuid: string;
  testMode: boolean;
  resellerReference: Nullable<string>;
  supplierReference: Nullable<string>;
  status: BookingStatus;
  utcCreatedAt: string;
  utcUpdatedAt: Nullable<string>;
  utcExpiresAt: Nullable<string>;
  utcRedeemedAt: Nullable<string>;
  utcConfirmedAt: Nullable<string>;
  productId: string;
  product?: Product;
  optionId: string;
  option?: Option;
  cancellable: boolean;
  cancellation: Nullable<Cancellation>;
  freesale: boolean;
  availabilityId: Nullable<string>;
  availability: Nullable<Availability>;
  contact: Contact;
  notes: Nullable<string>;
  deliveryMethods: DeliveryMethod[];
  voucher: Nullable<Ticket>;
  unitItems: UnitItem[];
}
export interface Cancellation {
  refund: string;
  reason: Nullable<string>;
  utcCancelledAt: string;
}

export interface Contact {
  fullName: Nullable<string>;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  emailAddress: Nullable<string>;
  phoneNumber: Nullable<string>;
  locales: string[];
  postalCode: Nullable<string>;
  country: Nullable<string>;
  notes: Nullable<string>;
  allowMarketing?: boolean;
}

export interface Ticket {
  redemptionMethod: RedemptionMethod;
  utcRedeemedAt: Nullable<string>;
  deliveryOptions: DeliveryOption[];
}

export interface DeliveryOption {
  deliveryFormat: DeliveryFormat;
  deliveryValue: string;
}

export interface UnitItem extends UnitItemPricing, BookingQuestions, BookingExtras {
  uuid: string;
  id: string;
  resellerReference: Nullable<string>;
  supplierReference: Nullable<string>;
  unitId: string;
  unit?: Unit;
  status: BookingStatus;
  utcRedeemedAt: Nullable<string>;
  contact: Contact;
  ticket: Nullable<Ticket>;
}

export interface UnitItemPricing {
  pricing?: Pricing;
}

export interface BookingPricing {
  pricing?: Pricing;
}

export interface BookingPickup {
  pickupRequested?: boolean;
  pickupPointId?: Nullable<string>;
  pickupHotel?: Nullable<string>;
  pickupHotelRoom?: Nullable<string>;
  pickupPoint?: Nullable<PickupPoint>;
}

export interface BookingContent {
  meetingPoint?: Nullable<string>;
  meetingPointCoordinates?: Nullable<[number]>;
  meetingLocalDateTime?: Nullable<string>;
  duration?: string;
  durationAmount?: string;
  durationUnit?: string;
  termsAccepted?: boolean;
  notices?: Notice[];
}

export interface BookingCart {
  orderId?: string;
  orderReference?: string;
  primary?: boolean;
}

export interface BookingOffers {
  offerCode?: string;
  offerTitle?: string;
  offerComparisons?: OfferComparison[];
  offerIsCombination?: boolean;
  offers?: Offer[];
  offer?: Offer;
}

export interface BookingQuestions {
  questionAnswers?: QuestionAnswer[];
}

export interface BookingResources {
  resourceAllocations?: ResourceAlloctation[];
}

export interface BookingGift {
  giftPayment?: Nullable<GiftPayment>;
}

export interface BookingExtras {
  extraItems?: ExtraItem[];
}

export interface BookingPackage {
  isPackage?: boolean;
  packageBookings?: PackageBooking[];
}

export interface BookingCardPayment {
  cardPayment?: CardPayment<CardPaymentGateway>;
}
