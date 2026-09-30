import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { BaseError } from '../models/BaseError';

export const baseErrorYupSchema = object().shape({
  error: string().required(),
  errorMessage: string().required(),
}) as SchemaOf<BaseError>;
