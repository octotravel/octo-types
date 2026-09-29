import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingCancellationRequest_uuid } from '../models/BookingCancellationRequest_uuid';

export const bookingCancellationRequest_uuidYupSchema =
  string().required() as SchemaOf<BookingCancellationRequest_uuid>;
