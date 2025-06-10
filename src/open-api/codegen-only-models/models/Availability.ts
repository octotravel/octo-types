/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityStatus } from './AvailabilityStatus';
import type { OpeningHours } from './OpeningHours';
import type { Pricing } from './Pricing';
import type { PricingUnit } from './PricingUnit';
export type Availability = {
  /**
   * The availability id, you''ll need this when booking. MUST be a unique identifier within the scope of an option.
   */
  id: string;
  /**
   * The start time for this availability. This will be in the local time zone of the product. Must be an `ISO 8601` compliant date and time.
   */
  localDateTimeStart: string;
  /**
   * The end time for this availability. This will be in the local time zone of the product. Must be an `ISO 8601` compliant date and time.
   */
  localDateTimeEnd: string;
  /**
   * The time by which the booking must be confirmed at
   */
  utcCutoffAt: string;
  /**
   * A boolean field indicating whether this is an all day availability and not a fixed departure time. If this value is true then there will be no other availability object on the same day.
   */
  allDay: boolean;
  /**
   * Whether there is availability for this date / slot.
   */
  available: boolean;
  /**
   * The status of that date. Possible values are:
   * `AVAILABLE` This availability is available for sale
   * `FREESALE` This availability has no capacity and is available.
   * `SOLD_OUT` There are no more spots available for this date / slot.
   * `LIMITED` This availability is available but has less than 50% capacity left.
   * `CLOSED` Availability is closed for this day / slot.
   */
  status: AvailabilityStatus;
  /**
   * This SHOULD NOT be returned when status is `FREESALE`. This SHOULD be a shared pool for all Unit types in the Option. If availability is tracked per-Unit then this value MUST be equal to the available quantity for the Unit that has the most remaining.
   */
  vacancies: number | null;
  /**
   * The total capacity on this day.
   */
  capacity: number | null;
  /**
   * Maximum number of units that can be sold within one booking on this day / slot.
   */
  maxUnits: number | null;
  /**
   * A list of opening hours that the product is open on this day.
   */
  openingHours: Array<OpeningHours>;
  /**
   * Is on the object when Pricing capability is requested.
   */
  unitPricing?: Array<PricingUnit>;
  /**
   * Is on the object when Pricing capability is requested.
   */
  pricing?: Array<Pricing>;
};
