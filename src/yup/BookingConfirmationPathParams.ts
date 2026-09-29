import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingConfirmationPathParams } from '../models/BookingConfirmationPathParams';

export const bookingConfirmationPathParamsYupSchema = object().shape({
  uuid: string().required(),
}) as SchemaOf<BookingConfirmationPathParams>;
