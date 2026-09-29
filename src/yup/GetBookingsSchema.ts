import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetBookingsSchema } from '../models/GetBookingsSchema';

export const getBookingsSchemaYupSchema = object().shape({
  resellerReference: string().notRequired(),
  supplierReference: string().notRequired(),
}) as SchemaOf<GetBookingsSchema>;
