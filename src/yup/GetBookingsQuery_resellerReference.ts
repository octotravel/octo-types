import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetBookingsQuery_resellerReference } from '../models/GetBookingsQuery_resellerReference';

export const getBookingsQuery_resellerReferenceYupSchema =
  string().required() as SchemaOf<GetBookingsQuery_resellerReference>;
