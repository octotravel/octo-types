import { number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Tax } from '../models/Tax';

export const taxYupSchema = object().shape({
  name: string().required(),
  retail: number().required(),
  original: number().required(),
  net: number().nullable().required(),
}) as SchemaOf<Tax>;
