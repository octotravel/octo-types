import type { SchemaOf } from 'yup';
import type { ErrorForbidden } from '../models/ErrorForbidden';
import { baseErrorYupSchema } from './BaseError';

export const errorForbiddenYupSchema = baseErrorYupSchema as SchemaOf<ErrorForbidden>;
