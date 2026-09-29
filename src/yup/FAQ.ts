import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { FAQ } from '../models/FAQ';

export const fAQYupSchema = object().shape({
  question: string().required(),
  answer: string().required(),
}) as SchemaOf<FAQ>;
