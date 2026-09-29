import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetBookingsRequest } from '../models/GetBookingsRequest';

export const getBookingsRequestYupSchema = object().shape({
  resellerReference: string().notRequired(),
  supplierReference: string().notRequired(),
}) as SchemaOf<GetBookingsRequest>;
