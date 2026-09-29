/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactField } from './ContactField';
import type { Extra } from './Extra';
import type { MembershipBenefit } from './MembershipBenefit';
import type { Pricing } from './Pricing';
import type { Question } from './Question';
import type { UnitRestrictions } from './UnitRestrictions';
import type { UnitType } from './UnitType';
export type Unit = {
	/**
	 * The unique identifier for this unit within the scope of the option. This ID ensures that each unit can be uniquely referenced and managed.
	 */
	id: string;
	/**
	 * An internal name for the unit, used for backend purposes and not visible to customers. This field helps with identifying and managing the unit in the supplier’s system.
	 */
	internalName: string;
	/**
	 * An optional internal reference code used by the supplier for identification purposes. This field may not be unique and is meant for operational use.
	 */
	reference: string | null;
	/**
	 * This is the base unit type for this unit definition. A value of TRAVELLER must only be used in replacement of ADULT, CHILD, INFANT, YOUTH, STUDENT, MILITARY or SENIOR.
	 */
	type: UnitType;
	/**
	 * Lists the contact information required per ticket for the unit. Possible values include:
	 * firstName: First name of the ticket holder.
	 * lastName: Last name of the ticket holder.
	 * fullName: Full name, as a combination of first and last name.
	 * emailAddress: Email address of the ticket holder.
	 * phoneNumber: Phone number of the ticket holder.
	 * postalCode: Postal code for identification purposes.
	 * country: Country code (ISO 3166-1 alpha-2).
	 * notes: Additional notes or special instructions.
	 * locales: Locale preferences (IETF BCP 47 tags).
	 */
	requiredContactFields: Array<ContactField>;
	/**
	 * This is an array of tags that can be used to filter the units.
	 */
	tags: Array<string>;
	/**
	 * This is the array of the contact information PER ticket that the supplier expects.
	 */
	visibleContactFields: Array<ContactField>;
	/**
	 * Specifies booking or usage restrictions for the unit.
	 */
	restrictions: UnitRestrictions;
	/**
	 * Title for this unit. Only present when octo/content capability is requested.
	 */
	title?: string;
	/**
	 * Plural title for this unit. Only present when octo/content capability is requested.
	 */
	titlePlural?: string;
	/**
	 * Subtitle for this unit. Only present when octo/content capability is requested.
	 */
	subtitle?: string | null;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	pricingFrom?: Array<Pricing>;
	/**
	 * Is on the object when Pricing capability is requested.
	 */
	pricing?: Array<Pricing>;
	/**
	 * Questions for this unit. Only present when octo/questions capability is requested.
	 */
	questions?: Array<Question>;
	extras?: Array<Extra>;
	membershipBenefit?: MembershipBenefit | null;
	redemptionCode?: string | null;
};
