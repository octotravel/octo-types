import { array, bool, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingConfirmationSchema } from '../models/BookingConfirmationSchema';
import { bookingContactYupSchema } from './BookingContact';
import { bookingUnitItemYupSchema } from './BookingUnitItem';

export const bookingConfirmationSchemaYupSchema = object().shape({
  uuid: string().required(),
  emailReceipt: bool().notRequired(),
  resellerReference: string().notRequired(),
  contact: bookingContactYupSchema.required(),
  unitItems: array().of(bookingUnitItemYupSchema).notRequired(),
}) as SchemaOf<BookingConfirmationSchema>;
