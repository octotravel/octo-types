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
   * A unique identifier for this availability. This ID is used during booking and must be unique within the scope of an option.
   */
  id: string;
  /**
   * The start time for this availability in the product’s local time zone. This value must conform to ISO 8601 standards (e.g., "2024-11-17T09:00:00+00:00").
   */
  localDateTimeStart: string;
  /**
   * The end time for this availability in the product’s local time zone. It must also adhere to ISO 8601 standards.
   */
  localDateTimeEnd: string;
  /**
   * The time by which the booking must be confirmed at
   */
  utcCutoffAt: string;
  /**
   * Indicates if this availability spans the entire day. If set to true, there will be no specific start or end times for this availability.
   */
  allDay: boolean;
  /**
   * Indicates if there are remaining slots available for this date or time slot.
   */
  available: boolean;
  /**
   * Defines the current status of the availability:
   * AVAILABLE: Open for booking.
   * FREESALE: Unlimited availability, no capacity limits.
   * SOLD_OUT: No spots available.
   * LIMITED: Less than 50% capacity remaining.
   * CLOSED: The availability is closed.
   */
  status: AvailabilityStatus;
  /**
   * Specifies the number of available slots remaining. Should be nulled or omitted when status is FREESALE. If availability is tracked per unit, this represents the maximum remaining quantity across all units.
   */
  vacancies: number | null;
  /**
   * The total capacity for this availability.
   */
  capacity: number | null;
  /**
   * The maximum number of units that can be sold in a single booking during this availability slot.
   */
  maxUnits: number | null;
  /**
   * Defines the opening hours for this availability, even for start time-based availability. Supports multiple periods for breaks in the day.
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
  /**
   * The public, customer-facing for the availablity. This name is displayed to end customers and should accurately represent the option for marketing and sales purposes. Can be null when not appliable
   */
  title?: string | null;
  /**
   * A brief, customer-facing description of the availability. This field provides a concise overview of availability.
   */
  shortDescription?: string;
};
