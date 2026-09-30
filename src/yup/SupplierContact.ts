import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { SupplierContact } from '../models/SupplierContact';

export const supplierContactYupSchema = object().shape({
  website: string().nullable().required(),
  email: string().nullable().required(),
  telephone: string().nullable().required(),
  address: string().nullable().required(),
}) as SchemaOf<SupplierContact>;
