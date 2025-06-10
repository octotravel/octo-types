/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancellationCutoffUnit } from './CancellationCutoffUnit';
import type { ContactField } from './ContactField';
import type { OptionRestrictions } from './OptionRestrictions';
import type { Pricing } from './Pricing';
import type { Unit } from './Unit';
export type Option = {
  /**
   * The id that identifies this option, it is only unique within the product.
   */
  id: string;
  /**
   * `TRUE` identifies the option as default, and should therefore rendered and selected first
   */
  default: boolean;
  /**
   * The name the supplier calls the option by.
   */
  internalName: string;
  /**
   * An optional code this supplier might use to identify the product.
   */
  reference: string | null;
  /**
   * This will be an array of all possible start times that can be returned during availability. For example an all day attraction may have a single value like `["00:00"]` whilst a tour with multiple departure times may have multiple:`["09:00", "14:00", "17:00"]`.
   */
  availabilityLocalStartTimes: Array<string>;
  /**
   * This is how long before the tour the booking can be still be cancelled.
   */
  cancellationCutoff: string;
  /**
   * The numeric amount for the cutoff.
   */
  cancellationCutoffAmount: number;
  /**
   * Time units used to determine duration. Three values are available: `hour`, `minute`, `day`.
   */
  cancellationCutoffUnit: CancellationCutoffUnit;
  /**
   * An array of the contact fields required to confirm a booking. These just apply to the lead traveller on the booking and not for every ticket.
   */
  requiredContactFields: Array<ContactField>;
  /**
   * An object containing a fixed list of restrictions for booking the option.
   */
  restrictions: OptionRestrictions;
  /**
   * The list of ticket types (units) available for sale
   */
  units: Array<Unit>;
  /**
   * Is on the object when Pricing capability is requested.
   */
  pricingFrom?: Array<Pricing>;
  /**
   * Is on the object when Pricing capability is requested.
   */
  pricing?: Array<Pricing>;
};
