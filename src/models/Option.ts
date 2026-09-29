/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactField } from './ContactField';
import type { DurationUnit } from './DurationUnit';
import type { Extra } from './Extra';
import type { ItineraryItem } from './ItineraryItem';
import type { OptionRestrictions } from './OptionRestrictions';
import type { PackageInclude } from './PackageInclude';
import type { PickupPoint } from './PickupPoint';
import type { Point } from './Point';
import type { Pricing } from './Pricing';
import type { Question } from './Question';
import type { RentalDuration } from './RentalDuration';
import type { Unit } from './Unit';
export type Option = {
	/**
	 * A unique identifier for the option within the product. This ID is critical for identifying specific options during bookings or other API interactions.
	 */
	id: string;
	/**
	 * Indicates whether the option is the default selection.
	 * true: This option should be rendered and selected first in customer-facing interfaces.
	 * false: The option is not default and requires manual selection.
	 */
	default: boolean;
	/**
	 * The internal name used by the supplier to refer to the option. This name is for internal or operational purposes and may differ from the public, customer-facing name. The customer-facing name is defined separately in the title field under the octo/content capability.
	 */
	internalName: string;
	/**
	 * An optional internal code used by the supplier to refer to the product. This field is useful for supplier-specific workflows or cross-referencing. It can be null if no reference code exists for the product.
	 */
	reference: string | null;
	/**
	 * An array containing all possible start times for the option that can be returned during availability. For example a tour with multiple departure times may have multiple:["09:00", "14:00", "17:00"].
	 */
	availabilityLocalStartTimes: Array<string>;
	availabilityLocalDateStart: string | null;
	availabilityLocalDateEnd: string | null;
	/**
	 * A text description of the option's cancellation policy, providing clear guidelines to customers.
	 */
	cancellationCutoff: string;
	/**
	 * The numeric value of the cutoff period for cancellations, relative to start time or closing hour (of opening hours product)
	 */
	cancellationCutoffAmount: number;
	/**
	 * The time unit associated with the cutoff period. Possible values are:
	 * hour: Cutoff is measured in hours.
	 * minute: Cutoff is measured in minutes.
	 * day: Cutoff is measured in days.
	 */
	cancellationCutoffUnit: DurationUnit;
	/**
	 * An array specifying the contact fields required to confirm a booking. These apply to the lead traveler, not individual tickets. Possible values:
	 * firstName: The first name of the traveler.
	 * lastName: The last name of the traveler.
	 * fullName: The full name of the traveler.
	 * emailAddress: The email address of the traveler.
	 * phoneNumber: The phone number of the traveler.
	 * postalCode: The postal code of the traveler.
	 * country: The country of the traveler.
	 * notes: Optional notes from the traveler.
	 * locales: Preferred language/localization preferences.
	 */
	requiredContactFields: Array<ContactField>;
	availabilityCutoff: string;
	availabilityCutoffAmount: number;
	availabilityCutoffUnit: DurationUnit;
	/**
	 * A text description of the option's advance booking notice requirement, providing clear guidelines to customers.
	 */
	availabilityNotice: string | null;
	/**
	 * The numeric value of the advance notice period required before availability, relative to start time or closing hour (of opening hours product)
	 */
	availabilityNoticeAmount: number | null;
	/**
	 * The time unit associated with the advance notice period. Possible values are:
	 * hour: Notice is measured in hours.
	 * minute: Notice is measured in minutes.
	 * day: Notice is measured in days.
	 */
	availabilityNoticeUnit: DurationUnit | null;
	/**
	 * An array of tags that can be used to filter products.
	 */
	tags: Array<string>;
	/**
	 * An array of the contact fields that are visible to the user when booking. These just apply to the lead traveller on the booking and not for every ticket.
	 */
	visibleContactFields: Array<ContactField>;
	restrictions: OptionRestrictions;
	units: Array<Unit>;
	/**
	 * The title of the option. Only present when octo/content capability is requested.
	 */
	title?: string;
	/**
	 * The subtitle of the option. Only present when octo/content capability is requested.
	 */
	subtitle?: string | null;
	/**
	 * The language of the option. Only present when octo/content capability is requested.
	 */
	language?: string;
	/**
	 * The description of the option. Only present when octo/content capability is requested.
	 */
	shortDescription?: string | null;
	/**
	 * Human readable duration of the option. Duration starts to count on redemption.
	 * This field can be hidden by `hide_duration`.
	 * Only present when octo/content capability is requested.
	 */
	duration?: string | null;
	/**
	 * The duration amount of the option.
	 * This field can be hidden by `hide_duration`.
	 * Only present when octo/content capability is requested.
	 */
	durationAmount?: number | null;
	/**
	 * The duration unit. Possible values are `hour`, `minute`, `day`.
	 * This field can be hidden by `hide_duration`.
	 * Only present when octo/content capability is requested.
	 */
	durationUnit?: DurationUnit | null;
	/**
	 * The cover image URL of the option. Only present when octo/content capability is requested.
	 */
	coverImageUrl?: string | null;
	/**
	 * The itinerary of the option. Only present when octo/content capability is requested.
	 */
	itinerary?: Array<ItineraryItem> | null;
	/**
	 * The origin point of the option. Only present when octo/content capability is requested.
	 */
	fromPoint?: Point | null;
	/**
	 * The destination point of the option. Only present when octo/content capability is requested.
	 */
	toPoint?: Point | null;
	meetingPoint?: string | null;
	meetingPointCoordinates?: string | null;
	meetingPointDirections?: string | null;
	meetingPointLatitude?: number | null;
	meetingPointLongitude?: number | null;
	/**
	 * Whether this option has pickup available.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupAvailable?: boolean;
	/**
	 * Whether pickup is required for this option.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupRequired?: boolean;
	/**
	 * Whether pickup is required for this option.
	 * This field is only present when the capability `octo/pickups` is requested.
	 */
	pickupPoints?: Array<PickupPoint>;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	pricingFrom?: Array<Pricing>;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	pricing?: Array<Pricing>;
	/**
	 * Questions for this option. Only present when octo/questions capability is requested.
	 */
	questions?: Array<Question>;
	extras?: Array<Extra>;
	packageIncludes?: Array<PackageInclude>;
	rentalDurations?: Array<RentalDuration>;
};
