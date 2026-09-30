import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingUpdateRequest_uuid } from '../models/BookingUpdateRequest_uuid';

export const bookingUpdateRequest_uuidYupSchema = string().required() as SchemaOf<BookingUpdateRequest_uuid>;
