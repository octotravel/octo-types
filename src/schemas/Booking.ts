import { array, bool, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import {
  BookingCancellationBody,
  BookingCancellationPathParams,
  BookingConfirmationBody,
  BookingConfirmationPathParams,
  BookingContact,
  BookingReservationBody,
  BookingUnitItem,
  BookingUpdateBody,
  BookingUpdatePathParams,
  ExtendReservationBody,
  ExtendReservationPathParams,
} from '../models/types.gen';

export const getBookingPathParamsSchema: SchemaOf<BookingConfirmationPathParams> = object().shape({
  uuid: string().required(),
});

export const bookingContactSchema: SchemaOf<BookingContact> = object().shape({
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

export const bookingUnitItemSchema: SchemaOf<BookingUnitItem> = object().shape({
  uuid: string().notRequired(),
  unitId: string().required(),
  resellerReference: string().notRequired(),
  contact: bookingContactSchema.notRequired().default(undefined),
});

export const createBookingBodySchema: SchemaOf<BookingReservationBody> = object().shape({
  uuid: string().notRequired(),
  resellerReference: string().notRequired(),
  productId: string().required(),
  optionId: string().required(),
  availabilityId: string().required(),
  expirationMinutes: number().integer().notRequired(),
  notes: string().nullable().notRequired(),
  emailReceipt: bool().notRequired(),
  unitItems: array().min(1).of(bookingUnitItemSchema).required(),
  contact: bookingContactSchema.notRequired().default(undefined),
  currency: string().notRequired().nullable(),
});

export const updateBookingBodySchema: SchemaOf<BookingUpdateBody> = object().shape({
  resellerReference: string().notRequired(),
  productId: string().notRequired(),
  optionId: string().notRequired(),
  availabilityId: string().notRequired(),
  expirationMinutes: number().integer().notRequired(),
  notes: string().notRequired().nullable(),
  emailReceipt: bool().notRequired(),
  unitItems: array().of(bookingUnitItemSchema).notRequired(),
  contact: bookingContactSchema.notRequired().default(undefined),
});

export const updateBookingPathParamsSchema: SchemaOf<BookingUpdatePathParams> = object().shape({
  uuid: string().required(),
});

export const confirmBookingBodySchema: SchemaOf<BookingConfirmationBody> = object().shape({
  resellerReference: string().notRequired(),
  emailReceipt: bool().notRequired(),
  unitItems: array().of(bookingUnitItemSchema).notRequired(),
  contact: bookingContactSchema.required(),
});

export const confirmBookingPathParamsSchema: SchemaOf<BookingConfirmationPathParams> = object().shape({
  uuid: string().required(),
});

export const cancelBookingBodySchema: SchemaOf<BookingCancellationBody> = object().shape({
  reason: string().notRequired(),
  force: bool().notRequired(),
});

export const cancelBookingPathParamsSchema: SchemaOf<BookingCancellationPathParams> = object().shape({
  uuid: string().required(),
});

export const extendBookingBodySchema: SchemaOf<ExtendReservationBody> = object().shape({
  expirationMinutes: number().integer().notRequired(),
});

export const extendBookingPathParamsSchema: SchemaOf<ExtendReservationPathParams> = object().shape({
  uuid: string().required(),
});
