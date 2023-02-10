import { object, string, number, array, bool, isSchema } from "yup";
import type { SchemaOf } from "yup";

export type GetBookingPathParamsSchema = {
  uuid: string;
};

export const getBookingPathParamsSchema: SchemaOf<GetBookingPathParamsSchema> =
  object().shape({
    uuid: string().required(),
  });

export type GetBookingsQueryParamsSchema = {
  resellerReference?: string;
  supplierReference?: string;
  localDate?: string;
  localDateStart?: string;
  localDateEnd?: string;
};

export const getBookingsQueryParamsSchema: SchemaOf<GetBookingsQueryParamsSchema> =
  object()
    .shape({
      resellerReference: string().notRequired(),
      supplierReference: string().notRequired(),
      localDate: string().notRequired(),
      localDateStart: string().notRequired(),
      localDateEnd: string().notRequired(),
    })
    .test(
      "",
      "either resellerReference, supplierReference, localDate or localDateStart/localDateEnd is required",
      ({
        resellerReference,
        supplierReference,
        localDate,
        localDateStart,
        localDateEnd,
      }) => {
        return Boolean(
          resellerReference ||
            supplierReference ||
            localDate ||
            (localDateStart && localDateEnd)
        );
      }
    );

export type BookingContactSchema = {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  country?: string;
  notes?: string;
  locales?: Array<string>;
  postalCode?: string;
};

export const bookingContactSchema: SchemaOf<BookingContactSchema> =
  object().shape({
    fullName: string().notRequired(),
    firstName: string().notRequired(),
    lastName: string().notRequired(),
    emailAddress: string().notRequired(),
    phoneNumber: string().notRequired(),
    country: string().notRequired(),
    notes: string().notRequired(),
    locales: array().of(string()).notRequired(),
    postalCode: string().notRequired(),
  });

export interface BookingUnitItemSchema {
  uuid?: string;
  unitId: string;
  resellerReference?: string;
  contact?: BookingContactSchema;
}

export const bookingUnitItemSchema: SchemaOf<BookingUnitItemSchema> =
  object().shape({
    uuid: string().notRequired(),
    unitId: string().required(),
    resellerReference: string().notRequired(),
    contact: bookingContactSchema.notRequired(),
  });

export interface CreateBookingBodySchema
  extends BookingPickupBodySchema,
    BookingOrderBodySchema,
    BookingQuestionsBodySchema {
  uuid?: string;
  resellerReference?: string;
  productId: string;
  optionId: string;
  availabilityId: string;
  expirationMinutes?: number;
  notes?: string;
  emailReceipt?: boolean;
  unitItems: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
}

interface BookingPickupBodySchema {
  pickupRequested?: boolean;
  pickupPointId?: string;
  pickupHotel?: string;
}

const bookingPickupBodySchema: SchemaOf<BookingPickupBodySchema> =
  object().shape({
    pickupRequested: bool().notRequired(),
    pickupPointId: string().notRequired(),
    pickupHotel: string().notRequired(),
  });

interface BookingOrderBodySchema {
  orderId?: string;
}

const bookingOrderBodySchema: SchemaOf<BookingOrderBodySchema> = object().shape(
  {
    orderId: string().optional(),
  }
);

interface BookingQuestionsBodySchema {
  questionAnswers?: Array<{
    questionId: string;
    value: string;
  }>;
}

const bookingQuestionsBodySchema: SchemaOf<BookingQuestionsBodySchema> =
  object().shape({
    questionAnswers: array()
      .of(
        object().shape({
          questionId: string().required(),
          value: string().required(),
        })
      )
      .optional(),
  });

export const createBookingBodySchema: SchemaOf<CreateBookingBodySchema> =
  object().shape({
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
    ...bookingPickupBodySchema.fields,
    ...bookingOrderBodySchema.fields,
    ...bookingQuestionsBodySchema.fields,
  });

export interface UpdateBookingBodySchema extends BookingPickupBodySchema {
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

export const updateBookingBodySchema: SchemaOf<UpdateBookingBodySchema> =
  object().shape({
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
  });

export interface UpdateBookingPathParamsSchema {
  uuid: string;
}

export const updateBookingPathParamsSchema: SchemaOf<UpdateBookingPathParamsSchema> =
  object().shape({
    uuid: string().required(),
  });

export interface ConfirmBookingBodySchema extends BookingPickupBodySchema {
  resellerReference?: string;
  notes?: string;
  emailReceipt?: boolean;
  unitItems?: BookingUnitItemSchema[];
  contact: BookingContactSchema;
}

export const confirmBookingBodySchema: SchemaOf<ConfirmBookingBodySchema> =
  object().shape({
    resellerReference: string().notRequired(),
    notes: string().notRequired(),
    emailReceipt: bool().notRequired(),
    unitItems: array().of(bookingUnitItemSchema).notRequired(),
    contact: bookingContactSchema.required().default(undefined),
    ...bookingPickupBodySchema.fields,
  });

export interface ConfirmBookingPathParamsSchema {
  uuid: string;
}

export const confirmBookingPathParamsSchema: SchemaOf<ConfirmBookingPathParamsSchema> =
  object().shape({
    uuid: string().required(),
  });

export type CancelBookingBodySchema = {
  reason?: string;
  force?: boolean;
};

export const cancelBookingBodySchema: SchemaOf<CancelBookingBodySchema> =
  object().shape({
    reason: string().notRequired(),
    force: bool().notRequired(),
  });

export interface CancelBookingPathParamsSchema {
  uuid: string;
}

export const cancelBookingPathParamsSchema: SchemaOf<CancelBookingPathParamsSchema> =
  object().shape({
    uuid: string().required(),
  });

export type ExtendBookingBodySchema = {
  expirationMinutes?: number;
};

export const extendBookingBodySchema: SchemaOf<ExtendBookingBodySchema> =
  object().shape({
    expirationMinutes: number().integer().notRequired(),
  });

export interface ExtendBookingPathParamsSchema {
  uuid: string;
}

export const extendBookingPathParamsSchema: SchemaOf<ExtendBookingPathParamsSchema> =
  object().shape({
    uuid: string().required(),
  });
