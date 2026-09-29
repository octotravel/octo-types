import { array, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingReservationBody } from '../models/BookingReservationBody';
import { bookingContactYupSchema } from './BookingContact';
import { bookingUnitItemYupSchema } from './BookingUnitItem';

export const bookingReservationBodyYupSchema = object().shape({
  uuid: string().notRequired(),
  productId: string().required(),
  optionId: string().required(),
  availabilityId: string().notRequired(),
  expirationMinutes: number().integer().notRequired(),
  notes: string().nullable().notRequired(),
  unitItems: array().of(bookingUnitItemYupSchema).required(),
  resellerReference: string().notRequired(),
  contact: bookingContactYupSchema.notRequired(),
  currency: string().nullable().notRequired(),
}) as SchemaOf<BookingReservationBody>;
