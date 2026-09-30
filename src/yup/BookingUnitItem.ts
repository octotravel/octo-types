import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingUnitItem } from '../models/BookingUnitItem';
import { bookingContactYupSchema } from './BookingContact';

export const bookingUnitItemYupSchema = object().shape({
  uuid: string().notRequired(),
  unitId: string().required(),
  resellerReference: string().notRequired(),
  contact: bookingContactYupSchema.notRequired(),
}) as SchemaOf<BookingUnitItem>;
