import { object, string, number, array, bool, ObjectSchema } from 'yup';
import { CardPaymentGateway } from '../types/CardPayment';

export interface GetBookingPathParamsSchema {
  uuid: string;
}

export const getBookingPathParamsSchema: ObjectSchema<GetBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface GetBookingsQueryParamsSchema {
  resellerReference?: string;
  supplierReference?: string;
  localDate?: string;
  localDateStart?: string;
  localDateEnd?: string;
}

export const getBookingsQueryParamsSchema: ObjectSchema<GetBookingsQueryParamsSchema> = object()
  .shape({
    resellerReference: string().optional(),
    supplierReference: string().optional(),
    localDate: string().optional(),
    localDateStart: string().optional(),
    localDateEnd: string().optional(),
  })
  .test(
    '',
    'either resellerReference, supplierReference, localDate or localDateStart/localDateEnd is required',
    ({ resellerReference, supplierReference, localDate, localDateStart, localDateEnd }) => {
      return Boolean(resellerReference || supplierReference || localDate || (localDateStart && localDateEnd));
    },
  );

export interface BookingContactSchema {
  fullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  country?: string | null;
  notes?: string | null;
  locales?: string[];
  postalCode?: string | null;
  allowMarketing?: boolean | null;
}

export const bookingContactSchema: ObjectSchema<BookingContactSchema> = object().shape({
  fullName: string().optional().nullable(),
  firstName: string().optional().nullable(),
  lastName: string().optional().nullable(),
  emailAddress: string().optional().nullable(),
  phoneNumber: string().optional().nullable(),
  country: string().optional().nullable(),
  notes: string().optional().nullable(),
  locales: array().of(string().required()).optional(),
  postalCode: string().optional().nullable(),
  allowMarketing: bool().optional().nullable(),
});

export interface BookingUnitItemSchema {
  uuid?: string;
  unitId: string;
  resellerReference?: string;
  contact?: BookingContactSchema;
}

export const bookingUnitItemSchema: ObjectSchema<BookingUnitItemSchema> = object().shape({
  uuid: string().optional(),
  unitId: string().required(),
  resellerReference: string().optional(),
  contact: bookingContactSchema.optional().default(undefined),
});

export interface CreateBookingBodySchema
  extends BookingPickupBodySchema,
    BookingOrderBodySchema,
    BookingGiftBodySchema,
    BookingQuestionsBodySchema,
    BookingExtrasBodySchema {
  uuid?: string;
  resellerReference?: string;
  productId: string;
  optionId: string;
  availabilityId?: string | null;
  expirationMinutes?: number;
  notes?: string | null;
  emailReceipt?: boolean;
  unitItems: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
  currency?: string | null;
}

interface BookingExtrasBodySchema {
  extraItems?: Array<{
    extraId: string;
  }>;
}

const bookingExtrasBodySchema: ObjectSchema<BookingExtrasBodySchema> = object().shape({
  extraItems: array()
    .of(
      object().shape({
        extraId: string().required(),
      }),
    )
    .optional(),
});

interface BookingPickupBodySchema {
  pickupRequested?: boolean;
  pickupPointId?: string;
  pickupHotel?: string;
}

const bookingPickupBodySchema: ObjectSchema<BookingPickupBodySchema> = object().shape({
  pickupRequested: bool().optional(),
  pickupPointId: string().optional(),
  pickupHotel: string().optional(),
});

interface BookingOrderBodySchema {
  orderId?: string;
}

const bookingOrderBodySchema: ObjectSchema<BookingOrderBodySchema> = object().shape({
  orderId: string().optional(),
});

interface BookingQuestionsBodySchema {
  questionAnswers?: Array<{
    questionId: string;
    value: string;
  }>;
}

const bookingQuestionsBodySchema: ObjectSchema<BookingQuestionsBodySchema> = object().shape({
  questionAnswers: array()
    .of(
      object().shape({
        questionId: string().required(),
        value: string().required(),
      }),
    )
    .optional(),
});

interface BookingGiftBodySchema {
  giftPayment?: {
    code?: string;
  };
}

const bookingGiftBodySchema: ObjectSchema<BookingGiftBodySchema> = object().shape({
  giftPayment: object()
    .shape({
      code: string().required(),
    })
    .optional()
    .default(undefined),
});

interface BookingPackageBodySchema {
  packageBookings?: Array<{
    packageIncludeId: string;
    availabilityId: string;
  }>;
}

const bookingPackageBodySchema: ObjectSchema<BookingPackageBodySchema> = object().shape({
  packageBookings: array()
    .of(
      object().shape({
        packageIncludeId: string().required(),
        availabilityId: string().required(),
      }),
    )
    .optional(),
});

export const createBookingBodySchema: ObjectSchema<CreateBookingBodySchema> = object()
  .shape({
    uuid: string().optional(),
    resellerReference: string().optional(),
    productId: string().required(),
    optionId: string().required(),
    availabilityId: string().required(),
    expirationMinutes: number().integer().optional(),
    notes: string().nullable().optional(),
    emailReceipt: bool().optional(),
    unitItems: array().of(bookingUnitItemSchema).required(),
    contact: bookingContactSchema.optional().default(undefined),
    currency: string().optional().nullable(),
  })
  .concat(bookingPickupBodySchema)
  .concat(bookingOrderBodySchema)
  .concat(bookingGiftBodySchema)
  .concat(bookingQuestionsBodySchema)
  .concat(bookingPackageBodySchema)
  .concat(bookingExtrasBodySchema);

interface UpdateBookingCardPaymentBodySchema {
  currency?: string;
  returnUrl?: string;
  originUrl?: string;
}

const updateBookingCardPaymentBodySchema: ObjectSchema<UpdateBookingCardPaymentBodySchema> = object().shape({
  currency: string().optional(),
  returnUrl: string().optional(),
  originUrl: string().optional(),
});

interface UpdateBookingExtrasBodySchema {
  extraItems?: Array<{
    extraId: string;
  }>;
}

const updateBookingExtrasBodySchema: ObjectSchema<UpdateBookingExtrasBodySchema> = object().shape({
  extraItems: array()
    .of(
      object().shape({
        extraId: string().required(),
      }),
    )
    .optional(),
});

interface BookingOfferBodySchema {
  offerCode?: string;
}

const bookingOfferBodySchema: ObjectSchema<BookingOfferBodySchema> = object().shape({
  offerCode: string().optional(),
});

export interface UpdateBookingBodySchema
  extends BookingPickupBodySchema,
    BookingGiftBodySchema,
    BookingOfferBodySchema,
    UpdateBookingCardPaymentBodySchema,
    UpdateBookingExtrasBodySchema {
  resellerReference?: string;
  productId?: string;
  optionId?: string;
  availabilityId?: string;
  expirationMinutes?: number;
  notes?: string | null;
  emailReceipt?: boolean;
  unitItems?: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
}

export const updateBookingBodySchema: ObjectSchema<UpdateBookingBodySchema> = object()
  .shape({
    resellerReference: string().optional(),
    productId: string().optional(),
    optionId: string().optional(),
    availabilityId: string().optional(),
    expirationMinutes: number().integer().optional(),
    notes: string().optional().nullable(),
    emailReceipt: bool().optional(),
    unitItems: array().of(bookingUnitItemSchema).optional(),
    contact: bookingContactSchema.optional().default(undefined),
  })
  .concat(bookingPickupBodySchema)
  .concat(bookingGiftBodySchema)
  .concat(bookingOfferBodySchema)
  .concat(bookingOfferBodySchema)
  .concat(bookingPackageBodySchema)
  .concat(updateBookingCardPaymentBodySchema)
  .concat(updateBookingExtrasBodySchema);

export interface UpdateBookingPathParamsSchema {
  uuid: string;
}

export const updateBookingPathParamsSchema: ObjectSchema<UpdateBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface BookingCardPaymentBodySchema {
  cardPayment?: {
    gateway?: CardPaymentGateway;
    amount?: number;
    currency?: string;
    notes?: string;
    adyen?: {
      sessionId: string;
    };
    vivawallet?: {
      orderCode: string;
      transactionId: string;
    };
    bridgepay?: {
      token: string;
    };
    stripe?: {
      paymentIntent?: string;
      paymentMethod?: string;
      setupIntent?: string;
    };
  };
}

export const bookingCardPaymentBodySchema: ObjectSchema<BookingCardPaymentBodySchema> = object().shape({
  cardPayment: object()
    .shape({
      gateway: string().oneOf(Object.values(CardPaymentGateway)).optional(),
      amount: number().integer().optional(),
      currency: string().optional(),
      notes: string().optional(),
      adyen: object()
        .shape({
          sessionId: string().required(),
        })
        .optional()
        .default(undefined),
      vivawallet: object()
        .shape({
          orderCode: string().required(),
          transactionId: string().required(),
        })
        .optional()
        .default(undefined),
      bridgepay: object()
        .shape({
          token: string().required(),
        })
        .optional()
        .default(undefined),
      stripe: object()
        .shape({
          paymentIntent: string().optional(),
          paymentMethod: string().optional(),
          setupIntent: string().optional(),
        })
        .optional()
        .default(undefined),
    })
    .optional()
    .default(undefined),
});

export interface ConfirmBookingBodySchema extends BookingPickupBodySchema, BookingCardPaymentBodySchema {
  resellerReference?: string;
  productId?: string;
  optionId?: string;
  availabilityId?: string;
  expirationMinutes?: number;
  notes?: string | null;
  emailReceipt?: boolean;
  unitItems?: BookingUnitItemSchema[];
  contact: BookingContactSchema;
}

export const confirmBookingBodySchema: ObjectSchema<ConfirmBookingBodySchema> = object()
  .shape({
    resellerReference: string().optional(),
    productId: string().optional(),
    optionId: string().optional(),
    availabilityId: string().optional(),
    expirationMinutes: number().integer().optional(),
    notes: string().optional().nullable(),
    emailReceipt: bool().optional(),
    unitItems: array().of(bookingUnitItemSchema).optional(),
    contact: bookingContactSchema.required().default(undefined),
  })
  .concat(bookingPickupBodySchema)
  .concat(bookingCardPaymentBodySchema);

export interface ConfirmBookingPathParamsSchema {
  uuid: string;
}

export const confirmBookingPathParamsSchema: ObjectSchema<ConfirmBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface CancelBookingBodySchema {
  reason?: string;
  force?: boolean;
  emailReceipt?: boolean;
}

export const cancelBookingBodySchema: ObjectSchema<CancelBookingBodySchema> = object().shape({
  reason: string().optional(),
  force: bool().optional(),
  emailReceipt: bool().optional(),
});

export interface CancelBookingPathParamsSchema {
  uuid: string;
}

export const cancelBookingPathParamsSchema: ObjectSchema<CancelBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface ExtendBookingBodySchema {
  expirationMinutes?: number;
}

export const extendBookingBodySchema: ObjectSchema<ExtendBookingBodySchema> = object().shape({
  expirationMinutes: number().integer().optional(),
});

export interface ExtendBookingPathParamsSchema {
  uuid: string;
}

export const extendBookingPathParamsSchema: ObjectSchema<ExtendBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});
