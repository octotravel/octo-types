import type { SchemaOf } from 'yup';
import type { ErrorUnauthorized } from '../models/ErrorUnauthorized';
import { baseErrorYupSchema } from './BaseError';

export const errorUnauthorizedYupSchema = baseErrorYupSchema as SchemaOf<ErrorUnauthorized>;
