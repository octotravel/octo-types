/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityType } from './AvailabilityType';
import type { DeliveryFormat } from './DeliveryFormat';
import type { DeliveryMethod } from './DeliveryMethod';
import type { Option } from './Option';
import type { PricingPer } from './PricingPer';
import type { RedemptionMethod } from './RedemptionMethod';
export type Product = {
  /**
   * The id used for checking for availability and creating bookings for the product. This MUST be unique within the scope of the Supplier.
   */
  id: string;
  /**
   * The name the supplier calls the product.
   */
  internalName: string;
  /**
   * An optional code this supplier might use to identify the product.
   */
  reference: string | null;
  /**
   * A language code indicating what language this product content is in. This MUST be a valid BCP 47 RFC 5646 RFC 4647 language tag.
   */
  locale: string;
  /**
   * The IANA TimeZone name this product is located in.
   */
  timeZone?: string;
  /**
   * Whether a booking can be made for this product without having to query availability first.
   */
  allowFreesale: boolean;
  /**
   * Whether bookings will be immediately confirmed when a sale is made, otherwise the supplier will later either accept or reject the booking. When instantConfirmation is set to false one should expect created bookings to first get into a PENDING state.
   */
  instantConfirmation: boolean;
  /**
   * This indicates whether the Reseller can expect immediate delivery of the customer's tickets. If `false` then the Reseller MUST be able to delay delivery of the tickets to the customer.
   */
  instantDelivery: boolean;
  /**
   * Whether an `availabilityId` is required when creating a booking. Without this the booking will be open-dated and not have a specified travel date.
   */
  availabilityRequired: boolean;
  /**
   * What type of availability this product has, possible values are:
   * `START_TIME` if there are fixed departure times which you must pick one. Typical for day tours or activities.
   * `OPENING_HOURS` if you just select a date and can visit any time when the venue is open.
   */
  availabilityType: AvailabilityType;
  /**
   * An array of formats the API will deliver the tickets as. Possible values are:
   * `QRCODE` A code to be presented as a QR CODE barcode
   * `CODE128A` code to be presented as a CODE 128 barcode
   * `PDF_URL` A URL to a PDF file which contains all the ticket details
   */
  deliveryFormats: Array<DeliveryFormat>;
  /**
   * How the formats described in `deliveryFormats` will be delivered in the booking response, possible values are:
   * `TICKET`: Individually per unit in the order (i.e. single ticket for each person)
   * `VOUCHER`: One ticket for the whole booking
   */
  deliveryMethods: Array<DeliveryMethod>;
  /**
   * How the voucher can be redeemed. Possible values are:
   * `MANIFEST` The guest name will be written down and they just need to show up
   * `DIGITAL` The tickets/voucher must be scanned but can be on mobile
   * `PRINT` The tickets/voucher must be printed and presented on arrival
   */
  redemptionMethod: RedemptionMethod;
  /**
   * An array of all options for this product. All products must have at least one option.
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
};
