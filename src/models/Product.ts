/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityType } from './AvailabilityType';
import type { AvailableLanguagesItem } from './AvailableLanguagesItem';
import type { Brand } from './Brand';
import type { Category } from './Category';
import type { CheckoutConfigPricingDisplay } from './CheckoutConfigPricingDisplay';
import type { DeliveryFormat } from './DeliveryFormat';
import type { DeliveryMethod } from './DeliveryMethod';
import type { Destination } from './Destination';
import type { DurationUnit } from './DurationUnit';
import type { FAQ } from './FAQ';
import type { GoogleOptions } from './GoogleOptions';
import type { Image } from './Image';
import type { Link } from './Link';
import type { Operator } from './Operator';
import type { Option } from './Option';
import type { PricingPer } from './PricingPer';
import type { RedemptionMethod } from './RedemptionMethod';
import type { SettlementMethod } from './SettlementMethod';
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
	timeZone: string;
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
	availabilityAllowed: boolean;
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
	tags: Array<string>;
	settlementMethods: Array<SettlementMethod>;
	freesaleDurationAmount: number;
	freesaleDurationUnit: DurationUnit;
	fixedWeight: boolean;
	weightUnit: string;
	freesaleDurationRoundup: boolean;
	freesaleDurationRoundupUnit: string;
	options: Array<Option>;
	operator: Operator | null;
	/**
	 * Country code for this product. Only present when octo/content capability is requested.
	 */
	country?: string;
	/**
	 * Location for this product. Only present when octo/content capability is requested.
	 */
	location?: string | null;
	/**
	 * Destination for this product. Only present when octo/content capability is requested.
	 */
	destination?: Destination;
	/**
	 * Alert message for this product. Only present when octo/content capability is requested.
	 */
	alert?: string | null;
	/**
	 * Title for this product. Only present when octo/content capability is requested.
	 */
	title?: string;
	/**
	 * Subtitle for this product. Only present when octo/content capability is requested.
	 */
	subtitle?: string | null;
	/**
	 * Description for this product. Only present when octo/content capability is requested.
	 */
	description?: string | null;
	/**
	 * Short description for this product. Only present when octo/content capability is requested.
	 */
	shortDescription?: string | null;
	/**
	 * Categories for this product. Only present when octo/content capability is requested.
	 */
	categories?: Array<Category>;
	/**
	 * Inclusions for this product. Only present when octo/content capability is requested.
	 */
	inclusions?: Array<string>;
	/**
	 * Exclusions for this product. Only present when octo/content capability is requested.
	 */
	exclusions?: Array<string>;
	/**
	 * Highlights for this product. Only present when octo/content capability is requested.
	 */
	highlights?: Array<string>;
	/**
	 * Whether this product is point to point or not. Only present when octo/content capability is requested.
	 */
	pointToPoint?: boolean;
	/**
	 * Booking terms for this product. Only present when octo/content capability is requested.
	 */
	bookingTerms?: string | null;
	/**
	 * Privacy terms for this product. Only present when octo/content capability is requested.
	 */
	privacyTerms?: string | null;
	/**
	 * Redemption instructions for this product. Only present when octo/content capability is requested.
	 */
	redemptionInstructions?: string | null;
	/**
	 * Usage instructions for this product. Only present when octo/content capability is requested.
	 */
	usageInstructions?: string | null;
	/**
	 * Cancellation policy for this product. Only present when octo/content capability is requested.
	 */
	cancellationPolicy?: string | null;
	/**
	 * FAQs for this product. Only present when octo/content capability is requested.
	 */
	faqs?: Array<FAQ>;
	coverImageUrl?: string | null;
	bannerImageUrl?: string | null;
	logoUrl?: string | null;
	videoUrl?: string | null;
	/**
	 * Gallery image URLs for this product. Only present when octo/content capability is requested.
	 */
	galleryImages?: Array<Image>;
	/**
	 * Banner image URLs for this product. Only present when octo/content capability is requested.
	 */
	bannerImages?: Array<Image>;
	googlePlaceId?: string | null;
	latitude?: number | null;
	longitude?: number | null;
	address?: string | null;
	keywords?: Array<string>;
	tagline?: string | null;
	brand?: Brand;
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
	includeTax?: boolean;
	hidePricingFrom?: boolean;
	isPackage?: boolean;
	packageBookingAvailabilityRequired?: boolean;
	packageProduct?: boolean;
	googleOptions?: GoogleOptions;
	isMembership?: boolean;
	isRental?: boolean;
	pricingDisplay?: CheckoutConfigPricingDisplay;
	outstandingBalanceShortDescription?: string;
	outstandingBalanceTitle?: string;
	href?: string | null;
	meta?: Record<string, string>;
	links?: Array<Link>;
	giftCardAllowed?: boolean;
	relatedProductIds?: Array<string>;
	availableLanguages?: AvailableLanguagesItem | null;
};
