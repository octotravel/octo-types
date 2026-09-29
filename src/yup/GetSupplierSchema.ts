import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetSupplierSchema } from '../models/GetSupplierSchema';

export const getSupplierSchemaYupSchema = object() as SchemaOf<GetSupplierSchema>;
