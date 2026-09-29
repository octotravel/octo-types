import { array, bool, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingConfirmationBody } from '../models/BookingConfirmationBody';
import { bookingContactYupSchema } from './BookingContact';
import { bookingUnitItemYupSchema } from './BookingUnitItem';

export const bookingConfirmationBodyYupSchema = object().shape({
  emailReceipt: bool().notRequired(),
  resellerReference: string().notRequired(),
  contact: bookingContactYupSchema.required(),
  unitItems: array().of(bookingUnitItemYupSchema).notRequired(),
}) as SchemaOf<BookingConfirmationBody>;
