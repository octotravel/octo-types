/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityStatus } from './AvailabilityStatus';
import type { DropoffPoint } from './DropoffPoint';
import type { ExtraPricing } from './ExtraPricing';
import type { Fare } from './Fare';
import type { Mapping } from './Mapping';
import type { Notice } from './Notice';
import type { Offer } from './Offer';
import type { OpeningHours } from './OpeningHours';
import type { PickupPoint } from './PickupPoint';
import type { Pricing } from './Pricing';
import type { PricingUnit } from './PricingUnit';
import type { Seller } from './Seller';
import type { TourGroup } from './TourGroup';
export type PackageAvailability = {
	packageIncludeId: string;
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
	utcOnsaleAt: string | null;
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
	 * Availability status code
	 */
	statusCode: string;
	/**
	 * Availability status message
	 */
	statusMessage: string;
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
	driver: Seller | null;
	guide: Seller | null;
	internalName?: string;
	tags?: Array<string>;
	reference: string | null;
	totalCapacity: number | null;
	totalMaxWeight?: number | null;
	paxWeight?: number;
	maxWeight?: number | null;
	weightUnit?: string | null;
	availableWeight?: number | null;
	limitCapacity: number | null;
	limitPaxCount: number;
	noShows: number;
	totalNoShows: number;
	totalPaxCount: number;
	paxCount: number;
	maxPaxCount: number | null;
	/**
	 * Whether this availability has pickup available.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupAvailable?: boolean;
	/**
	 * Whether pickup is required for this availability.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupRequired?: boolean;
	/**
	 * Whether pickup is required for this availability.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupPoints?: Array<PickupPoint>;
	dropoffAvailable?: boolean;
	dropoffRequired?: boolean;
	dropoffPoints?: Array<DropoffPoint>;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	unitPricing?: Array<PricingUnit>;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	pricing?: Pricing;
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
	/**
	 * Optional text for the meeting point location.
	 */
	meetingPoint?: string | null;
	/**
	 * Optional meeting point coordinates as an string: longitude, latitude
	 */
	meetingPointCoordinates?: string | null;
	/**
	 * Optional meeting point direstions
	 */
	meetingPointDirections?: string | null;
	/**
	 * Latitude component of the meeting point.
	 */
	meetingPointLatitude?: number | null;
	/**
	 * Longitude component of the meeting point.
	 */
	meetingPointLongitude?: number | null;
	/**
	 * Local datetime string (ISO 8601) for when to meet.
	 */
	meetingLocalDateTime?: string | null;
	/**
	 * Optional reference to the tour group this availability belongs to.
	 */
	tourGroup?: TourGroup | null;
	/**
	 * List of important notices related to the availability.
	 */
	notices?: Array<Notice>;
	extraPricing?: Array<ExtraPricing>;
	/**
	 * Indicates whether the availability uses resources (e.g., guides, vehicles).
	 */
	hasResources?: boolean;
	mappings?: Array<Mapping>;
	packageAvailabilities?: Array<PackageAvailability>;
	fare?: Fare | null;
};
