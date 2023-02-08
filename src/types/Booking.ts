import { PickupPoint } from "./PickupPoint";
import { Unit } from "./Unit";
import { OpeningHours } from "./Availability";
import { Option } from "./Option";
import {
  DeliveryFormat,
  DeliveryMethod,
  Product,
  RedemptionMethod,
} from "./Product";
import { Pricing } from "./Pricing";
import { Offer, OfferComparison } from "./Offer";
import { Question } from "./Question";

export enum BookingStatus {
  ON_HOLD = "ON_HOLD",
  CONFIRMED = "CONFIRMED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
  REDEEMED = "REDEEMED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export interface Booking
  extends BookingPricing,
    BookingPickup,
    BookingContent,
    BookingCart,
    BookingOffers,
    BookingQuestions {
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
  product: Product;
  optionId: string;
  option: Option;
  cancellable: boolean;
  cancellation: Nullable<Cancellation>;
  freesale: boolean;
  availabilityId: string;
  availability: BookingAvailability;
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
export interface BookingAvailability {
  id: string;
  localDateTimeStart: string;
  localDateTimeEnd: string;
  allDay: boolean;
  openingHours: OpeningHours[];
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

export interface UnitItem extends UnitItemPricing {
  uuid: string;
  resellerReference: Nullable<string>;
  supplierReference: Nullable<string>;
  unitId: string;
  unit: Unit;
  status: BookingStatus;
  utcRedeemedAt: Nullable<string>;
  contact: Contact;
  ticket: Nullable<Ticket>;
}

interface UnitItemPricing {
  pricing?: Pricing;
}

interface BookingPricing {
  pricing?: Pricing;
}

interface BookingPickup {
  pickupRequested?: boolean;
  pickupPointId?: Nullable<string>;
  pickupHotel?: Nullable<string>;
  pickupHotelRoom?: Nullable<string>;
  pickupPoint?: Nullable<PickupPoint>;
}

interface BookingContent {
  meetingPoint?: Nullable<string>;
  meetingPointCoordinates?: Nullable<[number]>;
  meetingLocalDateTime?: Nullable<string>;
  duration?: string;
  durationAmount?: string;
  durationUnit?: string;
}

interface BookingCart {
  orderId?: string;
  orderReference?: string;
  primary?: boolean;
}

interface BookingOffers {
  offerCode?: string;
  offerTitle?: string;
  offerComparisons?: OfferComparison[]
  offerIsCombination?: boolean;
  offers?: Offer[];
  offer?: Offer;
}

interface BookingQuestions {
  questionAswers?: QuestionAnswer[];
};

interface QuestionAnswer {
  questionId: string;
  question: Question[];
  value: Nullable<string>;
}