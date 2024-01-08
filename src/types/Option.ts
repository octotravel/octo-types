import { Unit } from "./Unit";
import { PickupPoint } from "./PickupPoint";
import { Pricing } from "./Pricing";
import { DurationUnit } from "./Duration";
import { Question } from "./Question";
import { Extra } from "./Extras";
import { Point } from "./Content";
import { Package } from "./Package";

export enum ContactField {
  firstName = "firstName",
  lastName = "lastName",
  emailAddress = "emailAddress",
  phoneNumber = "phoneNumber",
  country = "country",
  notes = "notes",
  locales = "locales",
  allowMarketing = "allowMarketing",
  postalCode = "postalCode",
}

export type UnitRestrictions = {
  minUnits: number;
  maxUnits: Nullable<number>;
  minPaxCount: number;
  maxPaxCount: Nullable<number>;
};

enum ItineraryType {
  START = "START",
  POINT = "POINT",
  EVENT = "EVENT",
  END = "END",
}

export type Itinerary = {
  name: string;
  type: ItineraryType;
  description: string;
  address: string;
  googlePlaceId: string;
  latitude: number;
  longitude: number;
  travelTime: string;
  travelTimeAmount: number;
  travelTimeUnit: string;
  duration: string;
  durationAmount: number;
  durationUnit: string;
};

export interface Option
  extends OptionContent,
    OptionPickup,
    OptionPricing,
    OptionQuestions,
    OptionExtras,
    OptionPackage {
  id: string;
  default: boolean;
  internalName: string;
  reference: Nullable<string>;
  availabilityLocalStartTimes: Array<string>;
  cancellationCutoff: string;
  cancellationCutoffAmount: number;
  cancellationCutoffUnit: string;
  requiredContactFields: Array<ContactField>;
  visibleContactFields: Array<ContactField>;
  restrictions: UnitRestrictions;
  units: Array<Unit>;
}

export interface OptionContent {
  title?: string;
  subtitle?: Nullable<string>;
  language?: string;
  shortDescription?: Nullable<string>;
  duration?: string;
  durationAmount?: string;
  durationUnit?: DurationUnit;
  itinerary?: Nullable<Itinerary[]>;
  coverImageUrl?: Nullable<string>;
  fromPoint?: Nullable<Point>;
  toPoint?: Nullable<Point>;
}

export interface OptionPricing {
  pricingFrom?: Array<Pricing>;
  pricing?: Array<Pricing>;
}

export interface OptionPickup {
  pickupRequired?: boolean;
  pickupAvailable?: boolean;
  pickupPoints?: Array<PickupPoint>;
}

export interface OptionQuestions {
  questions?: Array<Question>;
}

export interface OptionExtras {
  extras?: Array<Extra>;
}

export interface OptionPackage {
  packageIncludes?: Array<Package>;
}
