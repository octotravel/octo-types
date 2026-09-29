import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetBookingsQueryParams } from '../models/GetBookingsQueryParams';

export const getBookingsQueryParamsYupSchema = object().shape({
  resellerReference: string().notRequired(),
  supplierReference: string().notRequired(),
}) as SchemaOf<GetBookingsQueryParams>;
