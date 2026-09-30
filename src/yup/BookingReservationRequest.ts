import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingReservationRequest } from '../models/BookingReservationRequest';
import { bookingReservationBodyYupSchema } from './BookingReservationBody';

export const bookingReservationRequestYupSchema = object().shape({
  body: bookingReservationBodyYupSchema.required(),
}) as SchemaOf<BookingReservationRequest>;
