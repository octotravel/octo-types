import type { AvailabilityStatus, OpeningHours } from './Availability';
import type { Offer } from './Offer';
import type { Pricing, PricingUnit } from './Pricing';

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
  offers?: Offer[];
  offerCode?: string | null;
  offerTitle?: string | null;
  offer?: Offer | null;
}
