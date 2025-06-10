/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactField } from './ContactField';
import type { Pricing } from './Pricing';
import type { Restrictions } from './Restrictions';
import type { UnitType } from './UnitType';
export type Unit = {
  /**
   * This MUST be a unique identifier within the scope of the option.
   */
  id: string;
  /**
   * This should be a name to help with identifying the unit. It should NOT be shown to the customer.
   */
  internalName: string;
  /**
   * This is an internal reference identifier that the Supplier wishes to use. It MAY be non-unique.
   */
  reference: string | null;
  /**
   * This is the base unit type for this unit definition. A value of TRAVELLER MUST only be used in replacement of `ADULT`, `CHILD`, `INFANT`, `YOUTH`, `STUDENT`, or `SENIOR`.
   */
  type: UnitType;
  /**
   * unit restrictions
   */
  restrictions: Restrictions;
  /**
   * This is the array of the contact information PER ticket that the supplier expects.
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
};
