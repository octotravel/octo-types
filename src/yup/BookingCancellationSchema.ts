import { bool, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingCancellationSchema } from '../models/BookingCancellationSchema';

export const bookingCancellationSchemaYupSchema = object().shape({
  uuid: string().required(),
  reason: string().nullable().notRequired(),
  force: bool().notRequired(),
}) as SchemaOf<BookingCancellationSchema>;
