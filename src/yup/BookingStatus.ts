import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { BookingStatus } from '../models/BookingStatus';

export const bookingStatusYupSchema = string()
  .oneOf(Object.values(BookingStatus))
  .required() as SchemaOf<BookingStatus>;
