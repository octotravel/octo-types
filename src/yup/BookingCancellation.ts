import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingCancellation } from '../models/BookingCancellation';
import { refundYupSchema } from './Refund';

export const bookingCancellationYupSchema = object().shape({
  refund: refundYupSchema.required(),
  reason: string().nullable().required(),
  utcCancelledAt: string().required(),
}) as SchemaOf<BookingCancellation>;
