/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancellationCutoffUnit } from './CancellationCutoffUnit';
import type { CategoryLabel } from './CategoryLabel';
import type { Commentary } from './Commentary';
import type { ContactField } from './ContactField';
import type { FAQ } from './FAQ';
import type { Feature } from './Feature';
import type { Location } from './Location';
import type { Media } from './Media';
import type { OptionRestrictions } from './OptionRestrictions';
import type { Pricing } from './Pricing';
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
  cancellationCutoffUnit: CancellationCutoffUnit;
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
  /**
   * Specifies the limitations on booking the option.
   */
  restrictions: OptionRestrictions;
  /**
   * The list array of all units (ticket types) available for this product. Each unit represents a specific type of ticket (e.g., Adult, Child). See Unit for a detailed on the object.
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
  /**
   * The public, customer-facing name of the product. This name is displayed to end customers and should accurately represent the product for marketing and sales purposes
   */
  title?: string;
  /**
   * A brief, customer-facing description of the product. This field provides a concise overview of the product and can be null if no description is available.
   */
  shortDescription?: string | null;
  /**
   * A detailed description of the product, offering in-depth information about it and relevant details. This field can be null if extended details are not provided.
   */
  description?: string | null;
  /**
   * An array of structured objects describing various aspects of the product's features, grouped into clear categories. These include details about what is included, excluded, emphasized, essential, or safety-related, ensuring transparency and enhancing the product’s appeal to customers. Note: Features are intentionally repeated at both product and option levels, allowing suppliers to specify details where most applicable. Resellers must combine information from both levels for a comprehensive customer view.
   */
  features?: Array<Feature>;
  /**
   * An array containing frequently asked questions (FAQs) related to the product. This field is designed to address common customer inquiries by providing clear and concise answers, enhancing the customer experience and reducing potential confusion. Each object represents a single question and its corresponding answer. Note: FAQs are intentionally repeated at both product and option levels, enabling suppliers to address questions specific to each context. Resellers must combine FAQs from both levels for customer presentation.
   */
  faqs?: Array<FAQ>;
  /**
   * A list of media files hosted at stable URLs. Media enhances the visual and informational representation of the product, supporting images, videos, or documents.
   * Note: Media details are intentionally repeated at both product and option levels. Suppliers should use the level most relevant for the resource. Resellers must merge media information for customer presentation.
   */
  media?: Array<Media>;
  /**
   * A list of geographical locations associated with the product. These locations can represent an itinerary where the order of locations matters, such as for tours or experiences, or simply a list of related locations linked to the product. This field is particularly useful for map-dependent reseller platforms, as it provides geographic and contextual details to enhance customer understanding and platform integration. Each object in the array represents a single related location and includes the following fields:
   */
  locations?: Array<Location>;
  /**
   * A list of labels representing the categories applicable to the product or experience. These categories help customers quickly understand the nature, format, or features of the product. The predefined category labels are based on Google's Product Categories for Things to Do, ensuring alignment with industry standards. OCTO has also added custom categories to cover additional popular offerings. OCTO welcomes suggestions for additional categories to ensure consistency and better coverage. Please contact the team to propose updates to the specification.
   */
  categoryLabels?: Array<CategoryLabel>;
  /**
   * Indicates the duration of the product or experience in minutes. If the duration is flexible, this represents the typical minimum duration.
   */
  durationMinutesFrom?: number;
  /**
   * If a number: Represents the maximum in flexible duration of the product or experience in minutes, defining a range.
   * If null: Indicates that the duration is exact and matches the value of durationMinutesFrom.
   */
  durationMinutesTo?: number | null;
  /**
   * A list of commentary options available for the product. Each object in the array specifies the format and language of the commentary.
   */
  commentary?: Array<Commentary>;
};
