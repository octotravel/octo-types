import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingConfirmationRequest_uuid } from '../models/BookingConfirmationRequest_uuid';

export const bookingConfirmationRequest_uuidYupSchema =
  string().required() as SchemaOf<BookingConfirmationRequest_uuid>;
