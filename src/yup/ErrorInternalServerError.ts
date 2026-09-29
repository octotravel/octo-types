import type { SchemaOf } from 'yup';
import type { ErrorInternalServerError } from '../models/ErrorInternalServerError';
import { baseErrorYupSchema } from './BaseError';

export const errorInternalServerErrorYupSchema = baseErrorYupSchema as SchemaOf<ErrorInternalServerError>;
