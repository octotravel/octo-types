import { Zodios, type ZodiosOptions, makeApi } from '@zodios/core';
import { z } from 'zod';

const AvailabilityUnit = z.object({ id: z.string(), quantity: z.number().int() }).passthrough();
const AvailabilityCheckBody = z
  .object({
    productId: z.string(),
    optionId: z.string(),
    localDateStart: z.string().optional(),
    localDateEnd: z.string().optional(),
    availabilityIds: z.array(z.string()).optional(),
    units: z.array(AvailabilityUnit).optional(),
    currency: z.string().optional(),
  })
  .passthrough();
const AvailabilityStatus = z.enum(['AVAILABLE', 'FREESALE', 'SOLD_OUT', 'LIMITED', 'CLOSED']);
const OpeningHours = z.object({ from: z.string(), to: z.string() }).passthrough();
const Tax = z
  .object({
    name: z.string(),
    retail: z.number().int(),
    original: z.number().int(),
    net: z.number().int().nullable(),
  })
  .passthrough();
const Pricing = z
  .object({
    original: z.number().int(),
    retail: z.number().int(),
    net: z.number().int().nullable(),
    currency: z.string(),
    currencyPrecision: z.number().int(),
    includedTaxes: z.array(Tax),
  })
  .passthrough();
const PricingUnit = Pricing;
const Availability = z
  .object({
    id: z.string(),
    localDateTimeStart: z.string(),
    localDateTimeEnd: z.string(),
    utcCutoffAt: z.string(),
    allDay: z.boolean(),
    available: z.boolean(),
    status: AvailabilityStatus,
    vacancies: z.number().int().nullable(),
    capacity: z.number().int().nullable(),
    maxUnits: z.number().int().nullable(),
    openingHours: z.array(OpeningHours),
    unitPricing: z.array(PricingUnit).optional(),
    pricing: z.array(Pricing).optional(),
  })
  .passthrough();
const BaseError = z.object({ error: z.string(), errorMessage: z.string() }).passthrough();
const ErrorInvalidProductID = BaseError;
const ErrorInvalidOptionID = BaseError;
const ErrorBadRequest = BaseError;
const ErrorUnauthorized = BaseError;
const ErrorInternalServerError = BaseError;
const ErrorForbidden = BaseError;
const AvailabilityCalendarBody = z
  .object({
    productId: z.string(),
    optionId: z.string(),
    localDateStart: z.string().optional(),
    localDateEnd: z.string().optional(),
    units: z.array(AvailabilityUnit).optional(),
    currency: z.string().optional(),
  })
  .passthrough();
const AvailabilityCalendar = z
  .object({
    localDate: z.string(),
    available: z.boolean(),
    status: AvailabilityStatus,
    vacancies: z.number().int().nullable(),
    capacity: z.number().int().nullable(),
    openingHours: z.array(OpeningHours),
    unitPricingFrom: z.array(PricingUnit).optional(),
    pricingFrom: z.array(Pricing).optional(),
  })
  .passthrough();
const BookingUnitItem = z.object({ uuid: z.string().optional(), unitId: z.string() }).passthrough();
const BookingReservationBody = z
  .object({
    uuid: z.string().uuid().optional(),
    productId: z.string(),
    optionId: z.string(),
    availabilityId: z.string(),
    expirationMinutes: z.number().int().optional(),
    notes: z.string().optional(),
    unitItems: z.array(BookingUnitItem),
    currency: z.string().optional(),
  })
  .passthrough();
const BookingStatus = z.enum(['ON_HOLD', 'CONFIRMED', 'EXPIRED', 'CANCELLED', 'REDEEMED', 'PENDING', 'REJECTED']);
const AvailabilityType = z.enum(['START_TIME', 'OPENING_HOURS']);
const DeliveryFormat = z.enum(['PDF_URL', 'QRCODE', 'CODE128', 'PKPASS_URL']);
const DeliveryMethod = z.enum(['VOUCHER', 'TICKET']);
const RedemptionMethod = z.enum(['DIGITAL', 'PRINT', 'MANIFEST']);
const CancellationCutoffUnit = z.enum(['hour', 'minute', 'day']);
const ContactField = z.enum([
  'firstName',
  'lastName',
  'emailAddress',
  'phoneNumber',
  'country',
  'notes',
  'locales',
  'allowMarketing',
  'postalCode',
]);
const OptionRestrictions = z
  .object({
    minUnits: z.number().int().nullable(),
    maxUnits: z.number().int().nullable(),
  })
  .passthrough();
const UnitType = z.enum(['ADULT', 'YOUTH', 'CHILD', 'INFANT', 'FAMILY', 'SENIOR', 'STUDENT', 'MILITARY', 'OTHER']);
const Restrictions = z
  .object({
    minAge: z.number().int(),
    maxAge: z.number().int(),
    idRequired: z.boolean(),
    minQuantity: z.number().int().nullable(),
    maxQuantity: z.number().int().nullable(),
    paxCount: z.number().int(),
    accompaniedBy: z.array(z.string()),
  })
  .passthrough();
const Unit = z
  .object({
    id: z.string(),
    internalName: z.string(),
    reference: z.string().nullable(),
    type: UnitType,
    restrictions: Restrictions,
    requiredContactFields: z.array(ContactField),
    pricingFrom: z.array(Pricing).optional(),
    pricing: z.array(Pricing).optional(),
  })
  .passthrough();
const Option = z
  .object({
    id: z.string(),
    default: z.boolean(),
    internalName: z.string(),
    reference: z.string().nullable(),
    availabilityLocalStartTimes: z.array(z.string()).min(1),
    cancellationCutoff: z.string(),
    cancellationCutoffAmount: z.number().int(),
    cancellationCutoffUnit: CancellationCutoffUnit,
    requiredContactFields: z.array(ContactField),
    restrictions: OptionRestrictions,
    units: z.array(Unit),
    pricingFrom: z.array(Pricing).optional(),
    pricing: z.array(Pricing).optional(),
  })
  .passthrough();
const PricingPer = z.enum(['BOOKING', 'UNIT']);
const Product = z
  .object({
    id: z.string(),
    internalName: z.string(),
    reference: z.string().nullable(),
    locale: z.string(),
    timeZone: z.string().optional(),
    allowFreesale: z.boolean(),
    instantConfirmation: z.boolean(),
    instantDelivery: z.boolean(),
    availabilityRequired: z.boolean(),
    availabilityType: AvailabilityType,
    deliveryFormats: z.array(DeliveryFormat),
    deliveryMethods: z.array(DeliveryMethod),
    redemptionMethod: RedemptionMethod,
    options: z.array(Option),
    defaultCurrency: z.string().optional(),
    availableCurrencies: z.array(z.string()).optional(),
    pricingPer: PricingPer.optional(),
  })
  .passthrough();
const Refund = z.enum(['FULL', 'PARTIAL', 'NONE']);
const BookingCancellation = z
  .object({
    refund: Refund,
    reason: z.string().nullable(),
    utcCancelledAt: z.string(),
  })
  .passthrough();
const BookingAvailability = z
  .object({
    id: z.string(),
    localDateTimeStart: z.string(),
    localDateTimeEnd: z.string(),
    allDay: z.boolean(),
    openingHours: z.array(OpeningHours),
  })
  .passthrough();
const Contact = z
  .object({
    fullName: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    emailAddress: z.string().email().nullable(),
    phoneNumber: z.string().nullable(),
    locales: z.array(z.string()),
    postalCode: z.string().nullable(),
    country: z.string().nullable(),
    notes: z.string().nullable(),
  })
  .passthrough();
const DeliveryOption = z.object({ deliveryFormat: DeliveryFormat, deliveryValue: z.string() }).passthrough();
const Ticket = z
  .object({
    redemptionMethod: RedemptionMethod,
    utcRedeemedAt: z.string().nullable(),
    deliveryOptions: z.array(DeliveryOption),
  })
  .passthrough();
const UnitItem = z
  .object({
    uuid: z.string(),
    resellerReference: z.string().nullable(),
    supplierReference: z.string().nullable(),
    unitId: z.string(),
    unit: Unit.optional(),
    status: BookingStatus,
    utcRedeemedAt: z.string().nullable(),
    contact: Contact,
    ticket: Ticket.nullable(),
    pricing: Pricing.optional(),
  })
  .passthrough();
const Booking = z
  .object({
    id: z.string(),
    uuid: z.string().uuid(),
    testMode: z.boolean(),
    resellerReference: z.string().nullable(),
    supplierReference: z.string().nullable(),
    status: BookingStatus,
    utcCreatedAt: z.string(),
    utcUpdatedAt: z.string().nullable(),
    utcExpiresAt: z.string().nullable(),
    utcRedeemedAt: z.string().nullable(),
    utcConfirmedAt: z.string().nullable(),
    productId: z.string(),
    product: Product.optional(),
    optionId: z.string(),
    option: Option.optional(),
    cancellable: z.boolean(),
    cancellation: BookingCancellation.nullable(),
    freesale: z.boolean(),
    availabilityId: z.string(),
    availability: BookingAvailability,
    contact: Contact,
    notes: z.string().nullable(),
    deliveryMethods: z.array(DeliveryMethod),
    voucher: Ticket.nullable(),
    unitItems: z.array(UnitItem),
    pricing: Pricing.optional(),
  })
  .passthrough();
const ErrorInvalidUnitID = BaseError;
const ErrorInvalidAvailabilityID = BaseError;
const ErrorUnprocessableEntity = BaseError;
const ErrorInvalidBookingUUID = BaseError;
const BookingContact = z
  .object({
    fullName: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    emailAddress: z.string().email(),
    phoneNumber: z.string(),
    locales: z.array(z.string()),
    postalCode: z.string(),
    country: z.string(),
    notes: z.string(),
  })
  .partial()
  .passthrough();
const BookingUpdateBody = z
  .object({
    resellerReference: z.string(),
    productId: z.string(),
    optionId: z.string(),
    availabilityId: z.string(),
    expirationMinutes: z.number().int(),
    notes: z.string(),
    emailReceipt: z.boolean(),
    unitItems: z.array(BookingUnitItem),
    contact: BookingContact,
  })
  .partial()
  .passthrough();
const BookingCancellationBody = z.object({ reason: z.string(), force: z.boolean() }).partial().passthrough();
const BookingConfirmationBody = z
  .object({
    emailReceipt: z.boolean().optional(),
    resellerReference: z.string().optional(),
    contact: BookingContact,
    unitItems: z.array(BookingUnitItem).optional(),
  })
  .passthrough();
const ExtendReservationBody = z.object({ expirationMinutes: z.number().int() }).partial().passthrough();
const SupplierContact = z
  .object({
    website: z.string().nullable(),
    email: z.string().email().nullable(),
    telephone: z.string().nullable(),
    address: z.string().nullable(),
  })
  .passthrough();
const Capability = z.enum([
  'octo/adjustments',
  'octo/cart',
  'octo/content',
  'octo/mappings',
  'octo/packages',
  'octo/pickups',
  'octo/pricing',
  'octo/questions',
]);
const Category = z
  .object({
    id: z.string(),
    default: z.boolean(),
    name: z.string().nullable(),
    title: z.string().nullable(),
    shortDescription: z.string().nullable(),
    bannerImageUrl: z.string().url().nullable(),
    coverImageUrl: z.string().url().nullable(),
    productIds: z.array(z.string()),
  })
  .passthrough();
const Destination = z
  .object({
    id: z.string(),
    default: z.boolean(),
    name: z.string().nullable(),
    country: z.string().nullable(),
    contact: SupplierContact,
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
    googlePlaceId: z.string().nullable(),
    bannerImageUrl: z.string().url().nullable(),
    coverImageUrl: z.string().url().nullable(),
    videoUrl: z.string().url().nullable(),
    facebookUrl: z.string().url().nullable(),
    googleUrl: z.string().url().nullable(),
    tripadvisorUrl: z.string().url().nullable(),
    twitterUrl: z.string().url().nullable(),
    youtubeUrl: z.string().url().nullable(),
    instagramUrl: z.string().url().nullable(),
    categories: z.array(Category),
  })
  .passthrough();
const Supplier = z
  .object({
    id: z.string(),
    name: z.string(),
    endpoint: z.string().url(),
    contact: SupplierContact,
    capabilities: z.array(Capability),
    country: z.string().nullish(),
    destinations: z.array(Destination).optional(),
  })
  .passthrough();

export const schemas = {
  AvailabilityUnit,
  AvailabilityCheckBody,
  AvailabilityStatus,
  OpeningHours,
  Tax,
  Pricing,
  PricingUnit,
  Availability,
  BaseError,
  ErrorInvalidProductID,
  ErrorInvalidOptionID,
  ErrorBadRequest,
  ErrorUnauthorized,
  ErrorInternalServerError,
  ErrorForbidden,
  AvailabilityCalendarBody,
  AvailabilityCalendar,
  BookingUnitItem,
  BookingReservationBody,
  BookingStatus,
  AvailabilityType,
  DeliveryFormat,
  DeliveryMethod,
  RedemptionMethod,
  CancellationCutoffUnit,
  ContactField,
  OptionRestrictions,
  UnitType,
  Restrictions,
  Unit,
  Option,
  PricingPer,
  Product,
  Refund,
  BookingCancellation,
  BookingAvailability,
  Contact,
  DeliveryOption,
  Ticket,
  UnitItem,
  Booking,
  ErrorInvalidUnitID,
  ErrorInvalidAvailabilityID,
  ErrorUnprocessableEntity,
  ErrorInvalidBookingUUID,
  BookingContact,
  BookingUpdateBody,
  BookingCancellationBody,
  BookingConfirmationBody,
  ExtendReservationBody,
  SupplierContact,
  Capability,
  Category,
  Destination,
  Supplier,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/availability/',
    alias: 'Availabilities_AvailabilityCheck',
    description: `This endpoint is slightly slower as it will return an object for each individual departure time (or day). You have to perform this step to retrieve an &#x60;availabilityId&#x60; in order to confirm a sale, so if you just want to use this endpoint and skip the calendar endpoint then that&#x27;s perfectly ok.

You must pass in one of the following combinations of parameters for this endpoint:
- &#x60;localDate&#x60;
- &#x60;localeDateStart&#x60; and &#x60;localDateEnd&#x60;
- &#x60;availabilityIds&#x60;`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: AvailabilityCheckBody,
      },
    ],
    response: z.array(Availability),
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([
          ErrorInvalidProductID,
          ErrorInvalidOptionID,
          ErrorBadRequest,
          ErrorUnauthorized,
          ErrorInternalServerError,
          ErrorForbidden,
        ]),
      },
    ],
  },
  {
    method: 'post',
    path: '/availability/calendar',
    alias: 'Availabilities_AvailabilityCalendar',
    description: `This endpoint is highly optimised and will return a single object per day. It&#x27;s designed to be queried for large date ranges and the result is used to populate an availability calendar.

When the end user selects an open date you can call on &#x60;/availability&#x60; endpoint to get the &#x60;availabilityId&#x60; to create the booking`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: AvailabilityCalendarBody,
      },
    ],
    response: z.array(AvailabilityCalendar),
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([
          ErrorInvalidProductID,
          ErrorInvalidOptionID,
          ErrorBadRequest,
          ErrorUnauthorized,
          ErrorInternalServerError,
          ErrorForbidden,
        ]),
      },
    ],
  },
  {
    method: 'post',
    path: '/bookings/',
    alias: 'Bookings_BookingReservation',
    description: `Reserving availability when making a booking. The steps to make a reservation are:

1. **Check Availability**: Check the availability on the [/availability](docs/octo/branches/main/5b08f5f75e75d-availability-check) endpoint to retrieve an &#x60;availabilityId&#x60;
2. **Booking Reservation** (this step): Create a booking that reserves the availability while you collect payment and contact information from the customer. The booking will remain with status &#x60;ON_HOLD&#x60; until the booking is confirmed or the reservation hold expires.

The availability for the booking is held for the amount of time equal to the&#x60;expirationMinutes&#x60; parameter (if provided), up to an internal limit set by either the supplier or the OCTo provider. The &#x60;utc_expires_at&#x60; parameter in the response object will indicate when a reservtion will expire. A reservation can be extended by calling the [/bookings/{uuid}/extend](docs/octo/branches/main/2c7924ab9128f-extend-reservation) endpoint.

A reserved booking can be confirmed after the customer finalizes their choice on the [/bookings/{uuid}/confirm](docs/octo/branches/main/614d1613b2d70-booking-confirmation) endpoint provided the reservation had not expired.
`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: BookingReservationBody,
      },
    ],
    response: Booking,
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([
          ErrorInvalidProductID,
          ErrorInvalidOptionID,
          ErrorInvalidUnitID,
          ErrorInvalidAvailabilityID,
          ErrorUnprocessableEntity,
          ErrorUnauthorized,
          ErrorInternalServerError,
          ErrorForbidden,
        ]),
      },
    ],
  },
  {
    method: 'get',
    path: '/bookings/',
    alias: 'Bookings_GetBookings',
    description: `This endpoint will fetch the bookings you have made for the given filters.

When using this endpoint you must include one of the following query parameters:

- &#x60;resellerReference&#x60;
- &#x60;supplierReference&#x60;
- &#x60;localDate&#x60;
- &#x60;localDateStart&#x60; and &#x60;localDateEnd&#x60;`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'resellerReference',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'supplierReference',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'localDate',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'localDateStart',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'localDateEnd',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'productId',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'optionId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.array(Booking),
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([ErrorUnauthorized, ErrorInternalServerError, ErrorForbidden]),
      },
    ],
  },
  {
    method: 'get',
    path: '/bookings/:uuid',
    alias: 'Bookings_GetBooking',
    description: `Fetch the status of an existing booking.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'uuid',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Booking,
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([ErrorInvalidBookingUUID, ErrorUnauthorized, ErrorInternalServerError, ErrorForbidden]),
      },
    ],
  },
  {
    method: 'patch',
    path: '/bookings/:uuid',
    alias: 'Bookings_BookingUpdate',
    description: `Updates a booking before and after it has been confirmed as long as it hasn&#x27;&#x27;t been redeemed or within the cancellation cutoff window. To know if the booking can be updated check the booking&#x27;&#x27;s &#x60;cancellable&#x60; field. If the booking can be cancelled, it can also be updated. It&#x27;&#x27;s generally preferred to update a booking rather than cancelling it and rebooking`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: BookingUpdateBody,
      },
      {
        name: 'uuid',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Booking,
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([
          ErrorInvalidProductID,
          ErrorInvalidOptionID,
          ErrorInvalidUnitID,
          ErrorInvalidAvailabilityID,
          ErrorInvalidBookingUUID,
          ErrorUnprocessableEntity,
          ErrorUnauthorized,
          ErrorInternalServerError,
          ErrorForbidden,
        ]),
      },
    ],
  },
  {
    method: 'post',
    path: '/bookings/:uuid/cancel',
    alias: 'Bookings_BookingCancellation',
    description: `For cancelling bookings. You can only cancel a booking if &#x60;booking.cancellable&#x60; is &#x60;TRUE&#x60;, and is within the booking cancellation cut-off window.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: BookingCancellationBody,
      },
      {
        name: 'uuid',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Booking,
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([
          ErrorInvalidBookingUUID,
          ErrorUnprocessableEntity,
          ErrorUnauthorized,
          ErrorInternalServerError,
          ErrorForbidden,
        ]),
      },
    ],
  },
  {
    method: 'post',
    path: '/bookings/:uuid/confirm',
    alias: 'Bookings_BookingConfirmation',
    description: `This endpoint confirms the booking so it&#x27;s ready to be used.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: BookingConfirmationBody,
      },
      {
        name: 'uuid',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Booking,
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([
          ErrorInvalidProductID,
          ErrorInvalidOptionID,
          ErrorInvalidUnitID,
          ErrorInvalidAvailabilityID,
          ErrorInvalidBookingUUID,
          ErrorUnprocessableEntity,
          ErrorUnauthorized,
          ErrorInternalServerError,
          ErrorForbidden,
        ]),
      },
    ],
  },
  {
    method: 'post',
    path: '/bookings/:uuid/extend',
    alias: 'Bookings_ExtendReservation',
    description: `Use this endpoint to hold the availability for a booking longer if the status is &#x60;ON_HOLD&#x60;.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ expirationMinutes: z.number().int() }).partial().passthrough(),
      },
      {
        name: 'uuid',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Booking,
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([
          ErrorInvalidBookingUUID,
          ErrorUnprocessableEntity,
          ErrorUnauthorized,
          ErrorInternalServerError,
          ErrorForbidden,
        ]),
      },
    ],
  },
  {
    method: 'get',
    path: '/products/',
    alias: 'Products_GetProducts',
    description: `Fetch the list of products.`,
    requestFormat: 'json',
    response: z.array(Product),
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([ErrorUnauthorized, ErrorInternalServerError, ErrorForbidden]),
      },
    ],
  },
  {
    method: 'get',
    path: '/products/:id',
    alias: 'Products_GetProduct',
    description: `Fetch the product for the given id.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Product,
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([ErrorInvalidProductID, ErrorUnauthorized, ErrorInternalServerError, ErrorForbidden]),
      },
    ],
  },
  {
    method: 'get',
    path: '/supplier/',
    alias: 'Suppliers_get',
    description: `Returns the supplier and associated contact details.`,
    requestFormat: 'json',
    response: Supplier,
    errors: [
      {
        status: 400,
        description: `The server could not understand the request due to invalid syntax.`,
        schema: z.union([ErrorUnauthorized, ErrorInternalServerError, ErrorForbidden]),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
