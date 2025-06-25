/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityType } from './AvailabilityType';
import type { CategoryLabel } from './CategoryLabel';
import type { Commentary } from './Commentary';
import type { DeliveryFormat } from './DeliveryFormat';
import type { DeliveryMethod } from './DeliveryMethod';
import type { FAQ } from './FAQ';
import type { Feature } from './Feature';
import type { Location } from './Location';
import type { Media } from './Media';
import type { Option } from './Option';
import type { PricingPer } from './PricingPer';
import type { RedemptionMethod } from './RedemptionMethod';
export type Product = {
  /**
   * The unique identifier for the product, used across the platform to check availability, create bookings, etc. This identifier must be unique within the scope of the supplier’s system to ensure accurate referencing and operations.
   */
  id: string;
  /**
   * The internal name used by the supplier to refer to the product. This name is for internal or operational purposes and may differ from the public, customer-facing name. The customer-facing name is defined separately in the title field under the octo/content capability.
   */
  internalName: string;
  /**
   * An optional internal code used by the supplier to refer to the product. This field is useful for supplier-specific workflows or cross-referencing. It can be null if no reference code exists for the product.
   */
  reference: string | null;
  /**
   * The language code specifying the primary language in which the product operates. It must conform to the IETF BCP 47 standard, which defines language tags for localization (e.g., en-US for American English, fr-FR for French (France), es-ES for Spanish (Spain)).
   */
  locale: string;
  /**
   * The IANA Time Zone identifier indicating the product's location (e.g., America/New_York, Europe/London).
   */
  timeZone?: string;
  /**
   * Indicates whether an availabilityId is required when creating a booking. If set to false, bookings can be made without specifying a travel date, creating open-dated bookings.
   */
  allowFreesale: boolean;
  /**
   * Indicates whether the customer’s tickets or vouchers are delivered immediately after the booking is confirmed. If false, resellers must manage delayed ticket delivery processes.
   */
  instantConfirmation: boolean;
  /**
   * This indicates whether the Reseller can expect immediate delivery of the customer's tickets. If `false` then the Reseller MUST be able to delay delivery of the tickets to the customer.
   */
  instantDelivery: boolean;
  /**
   * Indicates whether an availabilityId is required when creating a booking. If set to false, bookings can be made without specifying a travel date, creating open-dated bookings.
   */
  availabilityRequired: boolean;
  /**
   * Specifies the type of availability for the product:
   * START_TIME: For products with fixed departure times (e.g., walking tour at set times during the day).
   * OPENING_HOURS: For products where customers select a date and can visit anytime during operating hours (e.g., museums general admission ticket valid at any time when museum is open).
   */
  availabilityType: AvailabilityType;
  /**
   * Lists the formats in which tickets or vouchers for this product are delivered. Each format specifies how the tickets or vouchers will be represented:
   * QRCODE: A code presented as a QR Code, commonly used for scanning at entry points.
   * CODE128: A linear barcode format widely used for retail and ticketing purposes.
   * AZTECCODE: A two-dimensional barcode format similar to QR codes but more compact. It is optimized for small spaces and often used in transportation and event ticketing.
   * PDF_URL: A URL linking to a downloadable PDF containing the complete ticket details for this product.
   * PKPASS_URL: A URL for adding the ticket to Apple Wallet (Passbook) for easy access on iOS devices.
   * This field ensures resellers can understand and integrate the appropriate ticket delivery formats specifically associated with this product.
   */
  deliveryFormats: Array<DeliveryFormat>;
  /**
   * Specifies all supported methods of how tickets or vouchers for this product are delivered in the booking response:
   * TICKET: Delivered individually per unit in the booking, where each person or unit receives a separate ticket.
   * VOUCHER: Delivered as a single voucher for the entire booking, consolidating all units under one document.
   * This field ensures clarity on the format of ticket or voucher delivery to resellers and customers.
   */
  deliveryMethods: Array<DeliveryMethod>;
  /**
   * Specifies how the product can be redeemed by the customer:
   * DIGITAL: The ticket or voucher must be presented, either scanned from a digital device (e.g., smartphone) or as a printed copy. Redemption requires a valid voucher or ticket, even in digital form.
   * MANIFEST: The customer’s name, reference, or other information is checked against a manifest by the supplier. Redemption does not require a ticket or voucher.
   * PRINT: A physical printed ticket or voucher is strictly required for redemption and must be presented at the time of use.
   * This field ensures resellers and customers understand the specific requirements for redeeming this product.
   */
  redemptionMethod: RedemptionMethod;
  /**
   * The list array of all options (variations of the product). Each product must have at lest one option. See Option for a detailed on the object.
   */
  options: Array<Option>;
  /**
   * Is on the object when Pricing capability is requested. Default currency for this product, if you omit the currency parameter on future endpoints this is the value the reservation system will fallback to.
   */
  defaultCurrency?: string;
  /**
   * Is on the object when Pricing capability is requested. All the possible currencies that we accept for this product.
   */
  availableCurrencies?: Array<string>;
  /**
   * Is on the object when Pricing capability is requested. Indicates whether the pricing is per unit (most common), or per booking. Pricing which is per booking is common for private charters or group booking products where the price is the same regardless of how many tickets are purchased.
   */
  pricingPer?: PricingPer;
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
