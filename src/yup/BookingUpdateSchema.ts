import { array, bool, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingUpdateSchema } from '../models/BookingUpdateSchema';
import { bookingContactYupSchema } from './BookingContact';
import { bookingUnitItemYupSchema } from './BookingUnitItem';

export const bookingUpdateSchemaYupSchema = object().shape({
  uuid: string().required(),
  resellerReference: string().notRequired(),
  productId: string().notRequired(),
  optionId: string().notRequired(),
  availabilityId: string().notRequired(),
  expirationMinutes: number().integer().notRequired(),
  notes: string().nullable().notRequired(),
  emailReceipt: bool().notRequired(),
  unitItems: array().of(bookingUnitItemYupSchema).notRequired(),
  contact: bookingContactYupSchema.notRequired(),
}) as SchemaOf<BookingUpdateSchema>;
