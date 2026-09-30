/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactField } from './ContactField';
import type { Feature } from './Feature';
import type { Pricing } from './Pricing';
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
   * Specifies booking or usage restrictions for the unit.
   */
  restrictions: UnitRestrictions;
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
   * Is on the object when Pricing capability is requested.
   */
  pricingFrom?: Array<Pricing>;
  /**
   * Is on the object when Pricing capability is requested.
   */
  pricing?: Array<Pricing>;
  /**
   * The public-facing name of the unit, designed to be displayed to customers. This should clearly convey the nature of the unit, such as "Adult" or "Student".
   */
  title?: string | null;
  /**
   * A concise summary of the unit, offering key details to customers. This helps in differentiating units and highlighting important characteristics.
   */
  shortDescription?: string;
  /**
   * An array of structured objects describing various aspects of the unit's features, grouped into clear categories. These include details about what is included, excluded, emphasized, essential, or safety-related, ensuring transparency and enhancing the option’s appeal to customers. Note: Features are intentionally repeated at both product and option levels, allowing suppliers to specify details where most applicable. Resellers must combine information from both levels for a comprehensive customer view.
   */
  features?: Array<Feature>;
};
