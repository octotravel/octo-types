import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetBookingSchema } from '../models/GetBookingSchema';

export const getBookingSchemaYupSchema = object().shape({
  uuid: string().required(),
}) as SchemaOf<GetBookingSchema>;
