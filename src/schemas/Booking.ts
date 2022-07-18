import * as yup from "yup";

export type GetBookingPathParamsSchema = {
  uuid: string;
};

export const getBookingPathParamsSchema: yup.SchemaOf<GetBookingPathParamsSchema> =
  yup.object().shape({
    uuid: yup.string().required(),
  });

export type GetBookingsQueryParamsSchema = {
  resellerReference?: string;
  supplierReference?: string;
  localDate?: string;
  localDateStart?: string;
  localDateEnd?: string;
};

export const getBookingsQueryParamsSchema: yup.SchemaOf<GetBookingsQueryParamsSchema> =
  yup
    .object()
    .shape({
      resellerReference: yup.string().notRequired(),
      supplierReference: yup.string().notRequired(),
      localDate: yup.string().notRequired(),
      localDateStart: yup.string().notRequired(),
      localDateEnd: yup.string().notRequired(),
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
};

export const bookingContactSchema: yup.SchemaOf<BookingContactSchema> = yup
  .object()
  .shape({
    fullName: yup.string().notRequired(),
    firstName: yup.string().notRequired(),
    lastName: yup.string().notRequired(),
    emailAddress: yup.string().notRequired(),
    phoneNumber: yup.string().notRequired(),
    country: yup.string().notRequired(),
    notes: yup.string().notRequired(),
    locales: yup.array().of(yup.string()).notRequired(),
  });

export interface BookingUnitItemSchema {
  uuid?: string;
  unitId: string;
  resellerReference?: string;
  contact?: BookingContactSchema;
}

export const bookingUnitItemSchema: yup.SchemaOf<BookingUnitItemSchema> = yup
  .object()
  .shape({
    uuid: yup.string().notRequired(),
    unitId: yup.string().required(),
    resellerReference: yup.string().notRequired(),
    contact: bookingContactSchema.notRequired(),
  });

export interface CreateBookingBodySchema extends BookingPickupBodySchema {
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

const bookingPickupBodySchema: yup.SchemaOf<BookingPickupBodySchema> = yup
  .object()
  .shape({
    pickupRequested: yup.bool().notRequired(),
    pickupPointId: yup.string().notRequired(),
    pickupHotel: yup.string().notRequired(),
  });

export const createBookingBodySchema: yup.SchemaOf<CreateBookingBodySchema> =
  yup.object().shape({
    uuid: yup.string().notRequired(),
    resellerReference: yup.string().notRequired(),
    productId: yup.string().required(),
    optionId: yup.string().required(),
    availabilityId: yup.string().required(),
    expirationMinutes: yup.number().integer().notRequired(),
    notes: yup.string().notRequired(),
    emailReceipt: yup.bool().notRequired(),
    unitItems: yup.array().of(bookingUnitItemSchema).required(),
    contact: bookingContactSchema.notRequired().default(undefined),
    ...bookingPickupBodySchema.fields,
  });

export interface UpdateBookingBodySchema extends BookingPickupBodySchema {
  resellerReference?: string;
  productId?: string;
  optionId?: string;
  availabilityId?: string;
  expirationMinutes?: number;
  notes?: string;
  emailReceipt?: boolean;
  unitItems: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
}

export const updateBookingBodySchema: yup.SchemaOf<UpdateBookingBodySchema> =
  yup.object().shape({
    resellerReference: yup.string().notRequired(),
    productId: yup.string().notRequired(),
    optionId: yup.string().notRequired(),
    availabilityId: yup.string().notRequired(),
    expirationMinutes: yup.number().integer().notRequired(),
    notes: yup.string().notRequired(),
    emailReceipt: yup.bool().notRequired(),
    unitItems: yup.array().of(bookingUnitItemSchema).notRequired(),
    contact: bookingContactSchema.notRequired().default(undefined),
    ...bookingPickupBodySchema.fields,
  });

export interface UpdateBookingPathParamsSchema {
  uuid: string;
}

export const updateBookingPathParamsSchema: yup.SchemaOf<UpdateBookingPathParamsSchema> =
  yup.object().shape({
    uuid: yup.string().required(),
  });

export interface ConfirmBookingBodySchema extends BookingPickupBodySchema {
  resellerReference?: string;
  notes?: string;
  emailReceipt?: boolean;
  unitItems?: BookingUnitItemSchema[];
  contact: BookingContactSchema;
}

export const confirmBookingBodySchema: yup.SchemaOf<ConfirmBookingBodySchema> =
  yup.object().shape({
    resellerReference: yup.string().notRequired(),
    notes: yup.string().notRequired(),
    emailReceipt: yup.bool().notRequired(),
    unitItems: yup.array().of(bookingUnitItemSchema).notRequired(),
    contact: bookingContactSchema.required().default(undefined),
    ...bookingPickupBodySchema.fields,
  });

export interface ConfirmBookingPathParamsSchema {
  uuid: string;
}

export const confirmBookingPathParamsSchema: yup.SchemaOf<ConfirmBookingPathParamsSchema> =
  yup.object().shape({
    uuid: yup.string().required(),
  });

export type CancelBookingBodySchema = {
  reason?: string;
  force?: boolean;
};

export const cancelBookingBodySchema: yup.SchemaOf<CancelBookingBodySchema> =
  yup.object().shape({
    reason: yup.string().notRequired(),
    force: yup.boolean().notRequired(),
  });

export interface CancelBookingPathParamsSchema {
  uuid: string;
}

export const cancelBookingPathParamsSchema: yup.SchemaOf<CancelBookingPathParamsSchema> =
  yup.object().shape({
    uuid: yup.string().required(),
  });

export type ExtendBookingBodySchema = {
  expirationMinutes?: number;
};

export const extendBookingBodySchema: yup.SchemaOf<ExtendBookingBodySchema> =
  yup.object().shape({
    expirationMinutes: yup.number().integer().notRequired(),
  });

export interface ExtendBookingPathParamsSchema {
  uuid: string;
}

export const extendBookingPathParamsSchema: yup.SchemaOf<ExtendBookingPathParamsSchema> =
  yup.object().shape({
    uuid: yup.string().required(),
  });
