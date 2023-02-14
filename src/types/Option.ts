import { Unit } from "./Unit";
import { PickupPoint } from "./PickupPoint";
import { Pricing } from "./Pricing";
import { DurationUnit } from "./Duration";

export enum ContactField {
  firstName = "firstName",
  lastName = "lastName",
  emailAddress = "emailAddress",
  phoneNumber = "phoneNumber",
  country = "country",
  notes = "notes",
  locales = "locales",
}

export type UnitRestrictions = {
  minUnits: number;
  maxUnits: Nullable<number>;
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

export interface GoogleOptions {
  landing_page: {
    url: string;
  };
  option_categories: Array<OptionCategories>;
  related_locations: Array<RelatedLocations>;
}
interface OptionCategories {
  label: string;
}
interface RelatedLocations {
  location: {
    location: {
      place_id: string;
    };
  };
  relation_type: string;
}

export interface Option
  extends OptionContent,
    OptionPickup,
    OptionPricing,
    OptionGoogle {
  id: string;
  default: boolean;
  internalName: string;
  reference: Nullable<string>;
  availabilityLocalStartTimes: Array<string>;
  cancellationCutoff: string;
  cancellationCutoffAmount: number;
  cancellationCutoffUnit: string;
  requiredContactFields: Array<ContactField>;
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

export interface OptionGoogle {
  googleOptions?: GoogleOptions;
}
