import { Notice, TourGroup } from "./Content";
import { Offer } from "./Offer";
import { PickupPoint } from "./PickupPoint";
import { Pricing, PricingUnit } from "./Pricing";

export enum AvailabilityType {
  START_TIME = "START_TIME",
  OPENING_HOURS = "OPENING_HOURS",
}

export enum AvailabilityStatus {
  AVAILABLE = "AVAILABLE",
  FREESALE = "FREESALE",
  SOLD_OUT = "SOLD_OUT",
  LIMITED = "LIMITED",
  CLOSED = "CLOSED",
}

export interface OpeningHours extends OpeningHoursContent {
  from: string;
  to: string;
}

interface OpeningHoursContent {
  frequency?: Nullable<string>;
  frequencyAmount?: Nullable<number>;
  frequencyUnit?: Nullable<string>;
}

export interface Availability
  extends AvailabilityContent,
    AvailabilityPricing,
    AvailabilityPickup,
    AvailabilityOffers,
    AvailabilityResources {
  id: string;
  localDateTimeStart: string;
  localDateTimeEnd: string;
  allDay: boolean;
  available: boolean;
  status: AvailabilityStatus;
  vacancies: Nullable<number>;
  capacity: Nullable<number>;
  maxUnits: Nullable<number>;
  utcCutoffAt: string;
  openingHours: OpeningHours[];
}

export interface AvailabilityContent {
  meetingPoint?: Nullable<string>;
  meetingPointCoordinates?: Nullable<[number]>;
  meetingPointLatitude?: Nullable<number>;
  meetingPointLongitude?: Nullable<number>;
  meetingLocalDateTime?: Nullable<string>;
  tourGroup?: Nullable<TourGroup>;
  notices?: Notice[];
}

export interface AvailabilityPricing {
  unitPricing?: PricingUnit[]; // pricingPer = UNIT
  // pricingPer = BOOKING
  // or when units are provided to the availability request
  pricing?: Pricing;
}

export interface AvailabilityPickup {
  pickupAvailable?: boolean;
  pickupRequired?: boolean;
  pickupPoints?: PickupPoint[];
}

export interface AvailabilityOffers {
  offerCode?: string;
  offerTitle?: string;
  offers?: Offer[];
  offer?: Offer;
}

export interface AvailabilityResources {
  hasResources: boolean;
}
