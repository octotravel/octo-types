import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingUpdatePathParams } from '../models/BookingUpdatePathParams';

export const bookingUpdatePathParamsYupSchema = object().shape({
  uuid: string().required(),
}) as SchemaOf<BookingUpdatePathParams>;
