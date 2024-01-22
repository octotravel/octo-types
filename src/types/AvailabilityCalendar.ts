import { AvailabilityStatus, OpeningHours } from './Availability';
import { Pricing, PricingUnit } from './Pricing';

export interface AvailabilityCalendar extends AvailabilityCalendarPricing {
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
