import { object, string, number, array, bool } from 'yup';
import type { SchemaOf } from 'yup';
import { CardPaymentGateway } from '../types/CardPayment';

export interface GetBookingPathParamsSchema {
  uuid: string;
}

export const getBookingPathParamsSchema: SchemaOf<GetBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface GetBookingsQueryParamsSchema {
  resellerReference?: string;
  supplierReference?: string;
  localDate?: string;
  localDateStart?: string;
  localDateEnd?: string;
}

export const getBookingsQueryParamsSchema: SchemaOf<GetBookingsQueryParamsSchema> = object()
  .shape({
    resellerReference: string().notRequired(),
    supplierReference: string().notRequired(),
    localDate: string().notRequired(),
    localDateStart: string().notRequired(),
    localDateEnd: string().notRequired(),
  })
  .test(
    '',
    'either resellerReference, supplierReference, localDate or localDateStart/localDateEnd is required',
    ({ resellerReference, supplierReference, localDate, localDateStart, localDateEnd }) => {
      return Boolean(resellerReference || supplierReference || localDate || (localDateStart && localDateEnd));
    },
  );

export interface BookingContactSchema {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  country?: string;
  notes?: string;
  locales?: string[];
  postalCode?: string;
  allowMarketing?: boolean;
}

export const bookingContactSchema: SchemaOf<BookingContactSchema> = object().shape({
  fullName: string().notRequired(),
  firstName: string().notRequired(),
  lastName: string().notRequired(),
  emailAddress: string().notRequired(),
  phoneNumber: string().notRequired(),
  country: string().notRequired(),
  notes: string().notRequired(),
  locales: array().of(string()).notRequired(),
  postalCode: string().notRequired(),
  allowMarketing: bool().notRequired(),
});

export interface BookingUnitItemSchema {
  uuid?: string;
  unitId: string;
  resellerReference?: string;
  contact?: BookingContactSchema;
}

export const bookingUnitItemSchema: SchemaOf<BookingUnitItemSchema> = object().shape({
  uuid: string().notRequired(),
  unitId: string().required(),
  resellerReference: string().notRequired(),
  contact: bookingContactSchema.notRequired(),
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
  notes?: string;
  emailReceipt?: boolean;
  unitItems: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
  currency?: string;
}

interface BookingExtrasBodySchema {
  extraItems?: Array<{
    extraId: string;
  }>;
}

const bookingExtrasBodySchema: SchemaOf<BookingExtrasBodySchema> = object().shape({
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

const bookingPickupBodySchema: SchemaOf<BookingPickupBodySchema> = object().shape({
  pickupRequested: bool().notRequired(),
  pickupPointId: string().notRequired(),
  pickupHotel: string().notRequired(),
});

interface BookingOrderBodySchema {
  orderId?: string;
}

const bookingOrderBodySchema: SchemaOf<BookingOrderBodySchema> = object().shape({
  orderId: string().optional(),
});

interface BookingQuestionsBodySchema {
  questionAnswers?: Array<{
    questionId: string;
    value: string;
  }>;
}

const bookingQuestionsBodySchema: SchemaOf<BookingQuestionsBodySchema> = object().shape({
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

const bookingGiftBodySchema: SchemaOf<BookingGiftBodySchema> = object().shape({
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

const bookingPackageBodySchema: SchemaOf<BookingPackageBodySchema> = object().shape({
  packageBookings: array()
    .of(
      object().shape({
        packageIncludeId: string().required(),
        availabilityId: string().required(),
      }),
    )
    .optional(),
});

export const createBookingBodySchema: SchemaOf<CreateBookingBodySchema> = object().shape({
  uuid: string().notRequired(),
  resellerReference: string().notRequired(),
  productId: string().required(),
  optionId: string().required(),
  availabilityId: string().required(),
  expirationMinutes: number().integer().notRequired(),
  notes: string().notRequired(),
  emailReceipt: bool().notRequired(),
  unitItems: array().of(bookingUnitItemSchema).required(),
  contact: bookingContactSchema.notRequired().default(undefined),
  currency: string().notRequired(),
  ...bookingPickupBodySchema.fields,
  ...bookingOrderBodySchema.fields,
  ...bookingGiftBodySchema.fields,
  ...bookingQuestionsBodySchema.fields,
  ...bookingPackageBodySchema.fields,
  ...bookingExtrasBodySchema.fields,
});

interface UpdateBookingCardPaymentBodySchema {
  currency?: string;
  returnUrl?: string;
  originUrl?: string;
}

const updateBookingCardPaymentBodySchema: SchemaOf<UpdateBookingCardPaymentBodySchema> = object().shape({
  currency: string().notRequired(),
  returnUrl: string().notRequired(),
  originUrl: string().notRequired(),
});

interface UpdateBookingExtrasBodySchema {
  extraItems?: Array<{
    extraId: string;
  }>;
}

const updateBookingExtrasBodySchema: SchemaOf<UpdateBookingExtrasBodySchema> = object().shape({
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

const bookingOfferBodySchema: SchemaOf<BookingOfferBodySchema> = object().shape({
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
  notes?: string;
  emailReceipt?: boolean;
  unitItems?: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
}

export const updateBookingBodySchema: SchemaOf<UpdateBookingBodySchema> = object().shape({
  resellerReference: string().notRequired(),
  productId: string().notRequired(),
  optionId: string().notRequired(),
  availabilityId: string().notRequired(),
  expirationMinutes: number().integer().notRequired(),
  notes: string().notRequired(),
  emailReceipt: bool().notRequired(),
  unitItems: array().of(bookingUnitItemSchema).notRequired(),
  contact: bookingContactSchema.notRequired().default(undefined),
  ...bookingPickupBodySchema.fields,
  ...bookingGiftBodySchema.fields,
  ...bookingOfferBodySchema.fields,
  ...bookingPackageBodySchema.fields,
  ...updateBookingCardPaymentBodySchema.fields,
  ...updateBookingExtrasBodySchema.fields,
});

export interface UpdateBookingPathParamsSchema {
  uuid: string;
}

export const updateBookingPathParamsSchema: SchemaOf<UpdateBookingPathParamsSchema> = object().shape({
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

export const bookingCardPaymentBodySchema: SchemaOf<BookingCardPaymentBodySchema> = object().shape({
  cardPayment: object()
    .shape({
      gateway: string().optional(),
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
          offerCode: string().required(),
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
  notes?: string;
  emailReceipt?: boolean;
  unitItems?: BookingUnitItemSchema[];
  contact: BookingContactSchema;
}

export const confirmBookingBodySchema: SchemaOf<ConfirmBookingBodySchema> = object().shape({
  resellerReference: string().notRequired(),
  notes: string().notRequired(),
  emailReceipt: bool().notRequired(),
  unitItems: array().of(bookingUnitItemSchema).notRequired(),
  contact: bookingContactSchema.required().default(undefined),
  ...bookingPickupBodySchema.fields,
  ...bookingCardPaymentBodySchema.fields,
});

export interface ConfirmBookingPathParamsSchema {
  uuid: string;
}

export const confirmBookingPathParamsSchema: SchemaOf<ConfirmBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface CancelBookingBodySchema {
  reason?: string;
  force?: boolean;
  emailReceipt?: boolean;
}

export const cancelBookingBodySchema: SchemaOf<CancelBookingBodySchema> = object().shape({
  reason: string().notRequired(),
  force: bool().notRequired(),
  emailReceipt: bool().notRequired(),
});

export interface CancelBookingPathParamsSchema {
  uuid: string;
}

export const cancelBookingPathParamsSchema: SchemaOf<CancelBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface ExtendBookingBodySchema {
  expirationMinutes?: number;
}

export const extendBookingBodySchema: SchemaOf<ExtendBookingBodySchema> = object().shape({
  expirationMinutes: number().integer().notRequired(),
});

export interface ExtendBookingPathParamsSchema {
  uuid: string;
}

export const extendBookingPathParamsSchema: SchemaOf<ExtendBookingPathParamsSchema> = object().shape({
  uuid: string().required(),
});
