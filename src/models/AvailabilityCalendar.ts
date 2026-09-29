/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityStatus } from './AvailabilityStatus';
import type { ExtraPricing } from './ExtraPricing';
import type { Offer } from './Offer';
import type { OpeningHours } from './OpeningHours';
import type { Pricing } from './Pricing';
import type { PricingUnit } from './PricingUnit';
export type AvailabilityCalendar = {
	/**
	 * The specific date for querying availability on Availability Calendar endpoint. This field must follow the ISO 8601 date format (e.g., 2024-11-18). It ensures standardized representation of dates across different systems.
	 */
	localDate: string;
	/**
	 * The local start date and time of the earliest opening hours slot for this day, in the destination's local time zone with UTC offset. Null when the day has no opening hours.
	 */
	localDateTimeStart: string | null;
	/**
	 * The local end date and time of the latest opening hours slot for this day, in the destination's local time zone with UTC offset. Null when the day has no opening hours.
	 */
	localDateTimeEnd: string | null;
	/**
	 * Indicates whether there is any remaining availability for the specified date.
	 * true: Availability exists.
	 * false: Fully booked or unavailable.
	 */
	available: boolean;
	/**
	 * Defines the current status of the availability date:
	 * AVAILABLE: Open for booking.
	 * FREESALE: Unlimited availability, no capacity limits.
	 * SOLD_OUT: No spots available.
	 * LIMITED: Less than 50% capacity remaining.
	 * CLOSED: The availability is closed.
	 */
	status: AvailabilityStatus;
	/**
	 * Availability status code
	 */
	statusCode: string;
	/**
	 * Availability status message
	 */
	statusMessage: string;
	/**
	 * Specifies the number of available slots remaining quantity (highest remaining vacancies from all availabilities of this day). Should be nulled or omitted when status is FREESALE.
	 */
	vacancies: number | null;
	/**
	 * The total capacity for this availability date.
	 */
	capacity: number | null;
	/**
	 * Defines the opening hours for this availability, even for start time-based availability. Supports multiple periods for breaks in the day.
	 */
	openingHours: Array<OpeningHours>;
	/**
	 * The product id.
	 */
	productId?: string;
	/**
	 * The option id.
	 */
	optionId?: string;
	limitCapacity: number | null;
	totalCapacity: number | null;
	totalMaxWeight: number | null;
	totalPaxWeight: number;
	paxWeight: number;
	maxWeight: number | null;
	weightUnit: string | null;
	availableWeight: number | null;
	limitPaxCount: number;
	noShows: number;
	totalNoShows: number;
	totalPaxCount: number;
	maxUnits: number | null;
	maxPaxCount: number | null;
	paxCount: number;
	/**
	 * The time by which the booking must be confirmed at
	 */
	utcCutoffAt: string;
	utcOnsaleAt: string | null;
	/**
	 * List of local start times for the availability.
	 */
	availabilityLocalStartTimes: Array<string>;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	unitPricingFrom?: Array<PricingUnit>;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	pricingFrom?: Pricing;
	/**
	 * Optional code used to apply a specific offer.
	 */
	offerCode?: string | null;
	/**
	 * Optional display title of the offer.
	 */
	offerTitle?: string | null;
	/**
	 * List of available offers for the availability.
	 */
	offers?: Array<Offer>;
	/**
	 * Best or selected offer for this availability.
	 */
	offer?: Offer | null;
	extraPricingFrom?: Array<ExtraPricing>;
};
