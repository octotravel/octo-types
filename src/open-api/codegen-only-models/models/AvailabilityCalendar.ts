/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityStatus } from './AvailabilityStatus';
import type { OpeningHours } from './OpeningHours';
import type { Pricing } from './Pricing';
import type { PricingUnit } from './PricingUnit';
export type AvailabilityCalendar = {
  /**
   * A single date to query. Must be ISO 8601 compliant date.
   */
  localDate: string;
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
   * A list of opening hours that the product is open on this day.
   */
  openingHours: Array<OpeningHours>;
  /**
   * Is on the object when Pricing capability is requested.
   */
  unitPricingFrom?: Array<PricingUnit>;
  /**
   * Is on the object when Pricing capability is requested.
   */
  pricingFrom?: Array<Pricing>;
};
