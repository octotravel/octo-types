import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetProductsSchema } from '../models/GetProductsSchema';

export const getProductsSchemaYupSchema = object() as SchemaOf<GetProductsSchema>;
