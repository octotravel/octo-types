import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { SupplierContent } from '../models/SupplierContent';
import { mediaYupSchema } from './Media';

export const supplierContentYupSchema = object().shape({
  shortDescription: string().nullable().notRequired(),
  media: array().of(mediaYupSchema).notRequired(),
}) as SchemaOf<SupplierContent>;
