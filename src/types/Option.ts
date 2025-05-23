import type { Point } from './Content';
import type { DurationUnit } from './Duration';
import type { Extra } from './Extras';
import type { Package } from './Package';
import type { PickupPoint } from './PickupPoint';
import type { Pricing } from './Pricing';
import type { Question } from './Question';
import type { Unit } from './Unit';

export enum ContactField {
  firstName = 'firstName',
  lastName = 'lastName',
  emailAddress = 'emailAddress',
  phoneNumber = 'phoneNumber',
  country = 'country',
  notes = 'notes',
  locales = 'locales',
  allowMarketing = 'allowMarketing',
  postalCode = 'postalCode',
}

export interface OptionRestrictions {
  minUnits: number;
  maxUnits: Nullable<number>;
  minPaxCount: number;
  maxPaxCount: Nullable<number>;
}

enum ItineraryType {
  START = 'START',
  POINT = 'POINT',
  EVENT = 'EVENT',
  END = 'END',
}

export interface Itinerary {
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
}

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
  availabilityLocalStartTimes: string[];
  cancellationCutoff: string;
  cancellationCutoffAmount: number;
  cancellationCutoffUnit: DurationUnit;
  availabilityCutoff: string;
  availabilityCutoffAmount: number;
  availabilityCutoffUnit: DurationUnit;
  requiredContactFields: ContactField[];
  visibleContactFields: ContactField[];
  restrictions: OptionRestrictions;
  units: Unit[];
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
  pricingFrom?: Pricing[];
  pricing?: Pricing[];
}

export interface OptionPickup {
  pickupRequired?: boolean;
  pickupAvailable?: boolean;
  pickupPoints?: PickupPoint[];
}

export interface OptionQuestions {
  questions?: Question[];
}

export interface OptionExtras {
  extras?: Extra[];
}

export interface OptionPackage {
  packageIncludes?: Package[];
}
