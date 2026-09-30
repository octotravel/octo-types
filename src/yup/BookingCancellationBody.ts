import { bool, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingCancellationBody } from '../models/BookingCancellationBody';

export const bookingCancellationBodyYupSchema = object().shape({
  reason: string().nullable().notRequired(),
  force: bool().notRequired(),
}) as SchemaOf<BookingCancellationBody>;
