import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingCancellationPathParams } from '../models/BookingCancellationPathParams';

export const bookingCancellationPathParamsYupSchema = object().shape({
  uuid: string().required(),
}) as SchemaOf<BookingCancellationPathParams>;
