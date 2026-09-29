/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingStatus } from './BookingStatus';
import type { CustomerContact } from './CustomerContact';
import type { ExtraItem } from './ExtraItem';
import type { Pricing } from './Pricing';
import type { QuestionAnswer } from './QuestionAnswer';
import type { Scan } from './Scan';
import type { Ticket } from './Ticket';
import type { Unit } from './Unit';
import type { UnitType } from './UnitType';
export type UnitItem = {
	/**
	 * The id of the unit, this will be unique to the option.
	 */
	uuid: string | null;
	/**
	 * A reference the reseller uses to identify the unit within all bookings.
	 */
	resellerReference: string | null;
	/**
	 * A reference the supplier uses to identify the unit within all bookings.
	 */
	supplierReference: string | null;
	/**
	 * This MUST be a unique identifier within the scope of the option.
	 */
	unitId: string;
	unit: Unit;
	/**
	 * The weight value of the unit item, as specified by the customer.
	 */
	weightValue: number;
	/**
	 * The unit of the weight value (e.g. "kg" or "lb").
	 */
	weightUnit: string;
	/**
	 * The status of the booking, possible values are:
	 * `ON_HOLD` The booking is pending confirmation, this is the default value when you first create the booking.
	 * `EXPIRED` If the booking is not confirmed before the expiration hold expires, it goes into an expired state.
	 * `CONFIRMED` Once the confirmation call is made the booking is ready to be used.
	 * `CANCELLED` If the booking is cancelled.
	 * `PENDING` If the booking is pending outside availability confirmation.
	 * `REDEEMED` If the booking is already redeemed.
	 */
	status: BookingStatus;
	/**
	 * The supplier-facing status, finer grained than `status`. Not part of the OCTO state machine, so new values may appear at any time.
	 */
	internalStatus: string;
	/**
	 * The ISO8601 date in UTC indicating when the ticket was used at the attraction.
	 */
	utcRedeemedAt: string | null;
	/**
	 * Contact details for the guests that will attend the tour/attraction. Contact Body can be applied to both the booking object (the main reservation) or the unit object (individual ticket holders - if the supplier requires this information)
	 */
	contact?: CustomerContact;
	ticket: Ticket | null;
	/**
	 * The id of the unit, this will be unique to the option.
	 */
	id: string;
	/**
	 * An alias for the unit.
	 */
	alias: string | null;
	/**
	 * The id of the unit, this will be unique to the option.
	 */
	rebookingUuid: string | null;
	/**
	 * The id of the unit, this will be unique to the option.
	 */
	rebookingUnitItemUuid: string | null;
	/**
	 * The id of the unit, this will be unique to the option.
	 */
	originalRebookingUuid: string | null;
	/**
	 * The id of the unit, this will be unique to the option.
	 */
	originalRebookingUnitItemUuid: string | null;
	/**
	 * The RFC 3339 date in UTC indicating when the ticket was rebooked.
	 */
	utcRebookedAt: string | null;
	utcNoshowedAt: string | null;
	requiredContactFields: Array<string>;
	visibleContactFields: Array<string>;
	unitType: UnitType;
	localDateTimeStart?: string;
	localDateTimeEnd?: string;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	pricing?: Pricing;
	/**
	 * Questions for this unit item. Only present when octo/questions capability is requested.
	 */
	questionAnswers?: Array<QuestionAnswer>;
	extraItems?: Array<ExtraItem>;
	scans?: Array<Scan>;
};
