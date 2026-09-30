import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetProductSchema } from '../models/GetProductSchema';

export const getProductSchemaYupSchema = object().shape({
  id: string().required(),
}) as SchemaOf<GetProductSchema>;
