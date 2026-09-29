import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Supplier } from '../models/Supplier';
import { mediaYupSchema } from './Media';
import { supplierContactYupSchema } from './SupplierContact';

export const supplierYupSchema = object().shape({
  id: string().required(),
  name: string().required(),
  endpoint: string().required(),
  contact: supplierContactYupSchema.required(),
  shortDescription: string().nullable().notRequired(),
  media: array().of(mediaYupSchema).notRequired(),
}) as SchemaOf<Supplier>;
