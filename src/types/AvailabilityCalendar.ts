import { AvailabilityStatus, OpeningHours } from './Availability';
import { Offer } from './Offer';
import { Pricing, PricingUnit } from './Pricing';

export interface AvailabilityCalendar extends AvailabilityCalendarPricing, AvailabilityCalendarOffers {
  localDate: string;
  available: boolean;
  status: AvailabilityStatus;
  vacancies: Nullable<number>;
  capacity: Nullable<number>;
  paxCount: Nullable<number>;
  utcCutoffAt: string;
  availabilityLocalStartTimes: string[];
  openingHours: OpeningHours[];
}

export interface AvailabilityCalendarPricing {
  unitPricingFrom?: PricingUnit[];
  pricingFrom?: Pricing;
}

export interface AvailabilityCalendarOffers {
  offers?: Array<Offer>;
  offerCode?: string;
  offerTitle?: string;
  offer?: Offer;
}