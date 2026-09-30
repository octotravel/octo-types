import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingContact } from '../models/BookingContact';

export const bookingContactYupSchema = object().shape({
  fullName: string().nullable().notRequired(),
  firstName: string().nullable().notRequired(),
  lastName: string().nullable().notRequired(),
  emailAddress: string().nullable().notRequired(),
  phoneNumber: string().nullable().notRequired(),
  locales: array().of(string()).notRequired(),
  postalCode: string().nullable().notRequired(),
  country: string().nullable().notRequired(),
  notes: string().nullable().notRequired(),
}) as SchemaOf<BookingContact>;
