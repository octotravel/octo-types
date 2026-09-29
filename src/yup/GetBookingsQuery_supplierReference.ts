import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetBookingsQuery_supplierReference } from '../models/GetBookingsQuery_supplierReference';

export const getBookingsQuery_supplierReferenceYupSchema =
  string().required() as SchemaOf<GetBookingsQuery_supplierReference>;
