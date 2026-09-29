import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingReservationPricingBody } from '../models/BookingReservationPricingBody';

export const bookingReservationPricingBodyYupSchema = object().shape({
  currency: string().nullable().notRequired(),
}) as SchemaOf<BookingReservationPricingBody>;
